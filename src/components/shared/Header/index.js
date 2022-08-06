import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { drawerIcon, arrow } from '~/assets'
import globalStyles from '~/assets/styles/globalStyles'
import LinearGradient from 'react-native-linear-gradient'
import colors from '~/constants/colors'
import Avatar from '~/components/shared/Avatar'
import { styles } from './header'

export default function Header({ title, navigation, type }) {

    function onPress() {
        if (type === 'back') navigation.goBack()
        else navigation.openDrawer()
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
            style={{ ...styles.header, ...globalStyles.centerContent }}
        >
            <View style={styles.rowFlex}>
                <View style={styles.columnFlex}>
                    <TouchableOpacity onPress={onPress}>
                        <Image
                            style={type === 'back' ? styles.back : styles.hamburger}
                            source={type === 'back' ? arrow : drawerIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Avatar />
            </View>
        </LinearGradient>
    )
}