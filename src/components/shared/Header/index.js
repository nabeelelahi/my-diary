import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { drawerIcon } from '~/assets'
import globalStyles from '~/assets/styles/globalStyles'
import LinearGradient from 'react-native-linear-gradient'
import colors from '~/constants/colors'
import Avatar from '~/components/shared/Avatar'
import { styles } from './header'

export default function Header({ title, navigation }) {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
            style={{ ...styles.header, ...globalStyles.centerContent }}
        >
            <View style={styles.rowFlex}>
                <View style={styles.columnFlex}>
                    <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                        <Image source={drawerIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Avatar />
            </View>
        </LinearGradient>
    )
}