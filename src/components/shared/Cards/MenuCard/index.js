import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import globalStyles from '~/assets/styles/globalStyles'
import { logo, forward } from '~/assets'
import { styles } from './menuCard'

export default function MenuCard({ source, title, onPress }) {

    return (
        <TouchableOpacity onPress={() => onPress ? onPress() : {}} style={styles.card}>
            <View style={globalStyles.row}>
                <Image style={styles.icon} source={source || logo} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image style={styles.forward} source={forward} />
        </TouchableOpacity>
    )
}
