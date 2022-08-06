import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '~/components/shared/Avatar';
import MenuCard from '~/components/dedicated/Cards/MenuCard';
import colors from '~/constants/colors';
import {
    home,
    logoutIcon,
    privacy,
    terms
} from '~/assets'
import { styles } from './drawer'
import logout from '~/helpers/logout'
import storage from '~/helpers/storage'


export default function DrawerComp(props) {

    const { navigation } = props;

    const [user, setUser] = useState(null)

    async function getUser() {
        const userSring = await storage.get('user')
        setUser(userSring)
    }

    useEffect(() => {
        getUser()
    }, [])

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
                            <Avatar hideTitle={true} />
                            <Text style={styles.title}>{user?.name}</Text>
                        </View>
                        <View>
                            <MenuCard
                                onPress={() => navigation.navigate('Dahboard')}
                                source={home}
                                title={'Home'}
                            />
                            {/* <MenuCard source={settings} title={'Settings'} /> */}
                            <MenuCard
                                onPress={() => navigation.navigate('PrivacyPolicy')}
                                source={privacy}
                                title={"Privacy Policy"}
                            />
                            <MenuCard
                                onPress={() => navigation.navigate('TermsAndConditions')}
                                source={terms}
                                title={"Terms and Conditions"}
                            />
                            {/* <MenuCard source={contact} title={'Contact'} /> */}
                            <MenuCard
                                onPress={() => logout(navigation)}
                                source={logoutIcon}
                                title={'Logout'}
                            />
                        </View>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </LinearGradient>
    );
}