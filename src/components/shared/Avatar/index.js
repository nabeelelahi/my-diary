import React from 'react'
import { View, Text, Image } from 'react-native'
import globalStyles from '~/assets/styles/globalStyles'
import { styles } from './avatar'

export default function Avatar({ title }) {
    return (
        <View style={globalStyles.centerContent}>
            <View style={styles.imageBox}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80' }}
                />
            </View>
            <Text style={styles.text}>Inga</Text>
        </View>
    )
}