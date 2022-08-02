import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { FormControl, Select } from "native-base";
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Autocomplete from 'react-native-autocomplete-input';
import moment from 'moment'
import options from '~/config/Data/options';
import { styles } from "./baseInputs";

export default function BaseInput({ item, data }) {

    const props = data;
    const [isVisible, setIsVisible] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [value, setValue] = useState('')
    const [boxStyles, setBoxStyles] = useState({ ...styles.box, ...styles.boxWhite })
    const [queriedData, setQueriedData] = useState([])

    useEffect(() => {
        setDate('')
        setTime('')
        setIsVisible(false)
        setQueriedData([])
    }, [item])

    useEffect(() => {
        if (props.touched[item.name]) {
            if (props.errors[item.name]) {
                setBoxStyles({ ...styles.box, ...styles.boxRed })
            }
            else {
                setBoxStyles({ ...styles.box, ...styles.boxWhite })
            }
        }
        else {
            setBoxStyles({ ...styles.box, ...styles.boxWhite })
        }
    }, [props?.touched[item.name], props?.errors[item.name]])

    function confirmTime(value) {
        setTime(moment(value).format('HH:mm'))
        props.values[item.name] = moment(value).format('HH:mm')
        setIsVisible(false)
    }

    function confirmDate(value) {
        setDate(moment(value).format('DD-MMM-YYYY'))
        props.values[item.name] = moment(value).format('DD-MMM-YYYY')
        setIsVisible(false)
    }

    function valueChange(value) {
        props.values[item.name] = value
        setValue(value)
    }

    function queryData(value) {
        setValue(value)
        if (value === '') {
            setQueriedData([])
        }
        else {
            const searchResult = options[item?.slug]?.filter(item => {
                return item.name?.toLowerCase()?.includes(value?.toLowerCase())
            })
            setQueriedData(searchResult)
        }
    }

    function onAutoCompleteChange(value) {
        props.values[item.name] = value
        setValue(value)
        setQueriedData([])
    }


    if (item) {
        if (item.type === 'input') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <TextInput
                        style={boxStyles}
                        placeholder={item.placeHolder}
                        keyboardType={item?.keyboardType || 'default'}
                        // placeholderTextColor={colors.secondary}
                        value={props?.values[item.name]}
                        onChangeText={props?.handleChange(item.name)}
                        onBlur={props?.handleBlur(item.name)}
                    />
                    <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
                </View>
            )
        }
        else if (item.type === 'select') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <FormControl style={styles.select}>
                        <Select
                            selectedValue={value}
                            value={value}
                            onValueChange={valueChange}
                            color={'#fff'}
                        >
                            {
                                options[item?.slug]?.map((option) => (
                                    <Select.Item
                                        key={String(option.value)}
                                        label={option.name}
                                        value={option.value || option.name}
                                    />
                                ))
                            }
                        </Select>
                    </FormControl>
                    <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
                </View>
            )
        }
        else if (item.type === 'autocomplete') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <Autocomplete
                        inputContainerStyle={{
                            // color:'black',
                            width: 300
                        }}
                        data={queriedData}
                        value={value}
                        onChangeText={(text) => queryData(text)}
                        flatListProps={{
                            keyExtractor: (_, idx) => _.name + `${Math.random() * 1000}`,
                            renderItem: ({ item }) => (
                                <TouchableOpacity onPress={() => onAutoCompleteChange(item?.name)}>
                                    <Text>{item?.name}</Text>
                                </TouchableOpacity>
                            ),
                        }}
                    />
                    <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
                </View>
            )
        }
        else if (item.type === 'date') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <TouchableOpacity
                        onPress={() => setIsVisible(true)}
                        style={styles.box}
                    >
                        <Text style={styles.text}>{date}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isVisible}
                        mode="date"
                        onConfirm={confirmDate}
                        onCancel={() => isVisible(false)}
                    />
                    <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
                </View>
            )
        }
        else if (item.type === 'time') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <TouchableOpacity
                        onPress={() => setIsVisible(true)}
                        style={styles.box}
                    >
                        <Text style={styles.text}>{time}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isVisible}
                        mode="time"
                        onConfirm={confirmTime}
                        onCancel={() => isVisible(false)}
                    />
                    <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
                </View>
            )
        }
    }
    else {
        return <></>
    }
}