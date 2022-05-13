import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import colors from '~/constants/colors';
import { styles } from "./baseInputs";

export default function BaseInput({ item, data }) {

    const props = data;

    if (item) {
        return (
            <View>
                <Text style={styles.label}>{item.label}</Text>
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
    else {
        return <></>
    }
}