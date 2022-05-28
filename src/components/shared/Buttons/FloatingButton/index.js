import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/constants/colors'
import globalStyles from '~/assets/styles/globalStyles'
import { styles } from './floatingButton'

export default function FloatingButton({ icon, onPress }) {

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
            style={styles.floatingButton}>
            <TouchableOpacity
                onPress={() => onPress ? onPress() : {}}
                style={{ ...styles.opacity, ...globalStyles.centerContent }}
            >
                <Image style={styles.icon} source={icon} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

