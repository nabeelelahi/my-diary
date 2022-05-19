import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { FormControl, Select } from "native-base";
import options from '~/config/Data/options';
import { styles } from "./baseInputs";

export default function BaseInput({ item, data }) {

    const props = data;

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
    }
    else {
        return <></>
    }
}