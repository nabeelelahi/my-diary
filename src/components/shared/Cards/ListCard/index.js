import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import formFields from '~/config/Data/formFields'
import metrices from '~/constants/metrices'
import globalStyles from '~/assets/styles/globalStyles'
import capitalizeString from '~/helpers/capilatizeString'
import { styles } from './listCards'

export default function ListCard({ data, item, customStyles }) {

    const [renderData, setRenderData] = useState(<></>)

    let dynamicStyle;

    const height = Math.ceil(formFields[item.slug].length / 3) * 0.06

    if (customStyles) dynamicStyle = { ...styles.customCard, ...customStyles }
    else dynamicStyle = styles.defaultCard

    dynamicStyle.height = metrices.HEIGHT(height)

    useEffect(() => {
        delete data.__v
        delete data._id
        delete data.userId
        const render = Object.entries(data)?.map(([key, value]) => (
            <View key={key} style={{ ...styles.column, ...globalStyles.centerContent }}>
                <Text style={styles.key}>{capitalizeString(key)}:</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        ))
        setRenderData(render)
    }, [data])


    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={dynamicStyle}>
            {
                data && renderData
            }
        </TouchableOpacity>
    )
}
