import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import initialValues from '~/config/Data/initialsValues'
import formFields from '~/config/Data/formFields'
import metrices from '~/constants/metrices'
import globalStyles from '~/assets/styles/globalStyles'
import capitalizeString from '~/helpers/capilatizeString'
import { styles } from './listCards'

export default function ListCard({ item, customStyles }) {

    let dynamicStyle;

    const data = initialValues[item.slug]
    const height = Math.ceil(formFields[item.slug].length / 3) * 0.06


    if (customStyles) dynamicStyle = { ...styles.customCard, ...customStyles }
    else dynamicStyle = styles.defaultCard

    dynamicStyle.height = metrices.HEIGHT(height)

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={dynamicStyle}>
            {
                data &&
                Object.entries(data)?.map(([key, value]) => (
                    <View key={key} style={{ ...styles.column, ...globalStyles.centerContent }}>
                        <Text style={styles.key}>{capitalizeString(key)}:</Text>
                        <Text style={styles.value}>Value</Text>
                    </View>
                ))
            }
        </TouchableOpacity>
    )
}
