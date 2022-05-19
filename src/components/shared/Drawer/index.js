import React from 'react';
import { View, Image } from 'react-native';
// import { Drawer } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/constants/colors';
import { styles } from './drawer'



export default function DrawerComp(props) {

    return (
        <LinearGradient
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
        >
            <DrawerContentScrollView {...props}>
                <View>
                    {/* <Drawer.Section style={styles.drawerSection}>
                        <View style={styles.homeView}>
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="clipboard-list"
                                        color={baseColors.WhiteToned}
                                        size={25}
                                    />
                                )}
                                label="EMR"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('EMR') }}
                            />
                        </View>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
        </LinearGradient>
    );
}