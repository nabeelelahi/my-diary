import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import colors from '~/constants/colors';
import { styles } from "./authInput";

export default function AuthInput({ item, data }) {

    const props = data;

    console.log(
        "======================================",
        item,
        "======================================",
    )

    if (item) {
        return (
            <View style={styles.box}>
                <Image style={styles.icon} source={item?.source} />
                <TextInput
                    style={styles.input}
                    placeholder={item.placeHolder}
                    placeholderTextColor={colors.secondary}
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