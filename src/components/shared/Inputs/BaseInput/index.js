import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FormControl, Select } from "native-base";
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'
import options from '~/config/Data/options';
import { styles } from "./baseInputs";

export default function BaseInput({ item, data }) {

    const props = data;
    const [isVisible, setIsVisible] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        setDate('')
        setTime('')
        setIsVisible(false)
    }, [item])

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

    if (item) {
        if (item.type === 'input') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <TextInput
                        style={styles.box}
                        placeholder={item.placeHolder}
                        // placeholderTextColor={colors.secondary}
                        value={props?.values[item.name]}
                        onChangeText={props?.handleChange(item.name)}
                        onBlur={props?.handleBlur(item.name)}
                    />
                    {/* <Text style={styles.errtxt}>{props?.touched.email && props?.errors.email}</Text> */}
                </View>
            )
        }
        else if (item.type === 'select') {
            return (
                <View>
                    <Text style={styles.label}>{item.label}:</Text>
                    <FormControl style={styles.select}>
                        <Select
                            selectedValue={''}
                            value={props?.values[item.name]}
                            onValueChange={props.handleChange(item.name)}
                        >
                            {
                                options[item?.slug]?.map((option) => (
                                    <Select.Item
                                        key={option.value}
                                        label={option.name}
                                        value={option.value}
                                    />
                                ))
                            }
                        </Select>
                    </FormControl>
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
                </View>
            )
        }
    }
    else {
        return <></>
    }
}