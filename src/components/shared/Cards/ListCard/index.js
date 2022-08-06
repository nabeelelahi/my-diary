import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import formFields from '~/config/Data/formFields'
import metrices from '~/constants/metrices'
import globalStyles from '~/assets/styles/globalStyles'
import capitalizeString from '~/helpers/capilatizeString'
import _ from 'lodash'
import { styles } from './listCards'

export default function ListCard({ data, item, customStyles }) {

    const [renderData, setRenderData] = useState(<></>)

    let dynamicStyle;

    const height = Math.ceil(formFields[item.slug].length / 3) * 0.06

    if (customStyles) dynamicStyle = { ...styles.customCard, ...customStyles }
    else dynamicStyle = styles.defaultCard

    dynamicStyle.height = metrices.HEIGHT(height)

    useEffect(() => {
        const tempData = _.cloneDeep(data);
        delete tempData.__v
        delete tempData._id
        delete tempData.userId
        const render = Object.entries(tempData)?.map(([key, value]) => (
            <View key={`${Math.random() * 1000000}`} style={{ ...styles.column, ...globalStyles.centerContent }}>
                <Text style={styles.key}>{capitalizeString(key)}:</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        ))
        setRenderData(render)
    }, [data])


    return (
        <View activeOpacity={0.7} style={dynamicStyle}>
            {
                data && renderData
            }
        </View>
    )
}
