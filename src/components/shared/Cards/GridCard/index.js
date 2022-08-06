import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '~/constants/colors'
import metrices from '~/constants/metrices'
import globalStyles from '~/assets/styles/globalStyles'
import { styles } from './gridCards'

export default function GridCard({ item, index = 1, onPress, length }) {

    let dynamicStyle;

    const conditionalStyles = {
        marginLeft: index % 2 === 0 ? '5%' : 0,
        marginRight: index % 2 !== 0 ? '5%' : 0,
    }

    const width = index % 3 === 0 ? '100%' : item.slug === 'emergencyContact' ? '100%' : '42.5%'

    const height = item.slug === 'emergencyContact' ? metrices.HEIGHT(0.175) : metrices.HEIGHT(0.225)

    if (index % 3 === 0) dynamicStyle = { ...styles.card, ...conditionalStyles }
    else dynamicStyle = styles.card

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ ...styles.opacity, width, height }}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={colors.baseGradient}
                style={{ ...styles.card, ...globalStyles.centerContent }}
            >
                <Image style={index % 3 === 0 ? styles.imageLarge : styles.imageSmall} source={item.icon} />
                <Text style={styles.title}>{item.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
