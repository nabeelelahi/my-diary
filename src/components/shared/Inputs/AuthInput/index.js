import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import colors from '~/constants/colors';
import { styles } from "./authInput";

export default function AuthInput({ item, data }) {

    const props = data;
    const [boxStyles, setBoxStyles] = useState({ ...styles.input, ...styles.boxWhite })

    useEffect(() => {
        if (props.touched[item.name]) {
            if (props.errors[item.name]) {
                setBoxStyles({ ...styles.input, ...styles.boxRed })
            }
            else {
                setBoxStyles({ ...styles.input, ...styles.boxWhite })
            }
        }
        else {
            setBoxStyles({ ...styles.input, ...styles.boxWhite })
        }
    }, [props?.touched[item.name], props?.errors[item.name]])

    if (item) {
        return (
            <>
                <View style={styles.box}>
                    <Image style={styles.icon} source={item?.source} />
                    <TextInput
                        style={boxStyles}
                        placeholder={item.placeHolder}
                        secureTextEntry={item.secureTextEntry}
                        placeholderTextColor={colors.secondary}
                        value={props?.values[item.name]}
                        onChangeText={props?.handleChange(item.name)}
                        onBlur={props?.handleBlur(item.name)}
                    />
                </View>
                <Text style={styles.errtxt}>{props?.touched[item.name] && props?.errors[item.name]}</Text>
            </>
        )
    }
    else {
        return <></>
    }
}