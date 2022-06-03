import React from 'react';
import { View, Image, Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '~/components/shared/Avatar';
import MenuCard from '~/components/shared/Cards/MenuCard';
import colors from '~/constants/colors';
import {
    home,
    settings,
    faqs,
    contact
} from '~/assets'
import { styles } from './drawer'



export default function DrawerComp(props) {

    const {navigation} = props

    return (
        <LinearGradient
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
        >
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <Drawer.Section>
                        <View style={styles.topView}>
                            <Avatar />
                            <Text style={styles.title}>Inga</Text>
                        </View>
                        <View>
                            <MenuCard 
                            onPress={() => navigation.navigate('Dahboard')} 
                            source={home} 
                            title={'Home'}
                             />
                            <MenuCard source={settings} title={'Settings'} />
                            <MenuCard source={faqs} title={"FAQ's"} />
                            <MenuCard source={contact} title={'Contact'} />
                        </View>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </LinearGradient>
    );
}