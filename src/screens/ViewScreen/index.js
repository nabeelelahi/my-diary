import React from 'react'
import { View, ScrollView } from 'react-native'
import Header from '~/components/shared/Header'
import FloatingButton from '~/components/shared/Buttons/FloatingButton'
import ListCard from '../../components/shared/Cards/ListCard'
import { plus } from '~/assets'
import { styles } from './viewScreen'

export default function ViewScreen({ navigation, route }) {

    const data = route.params

    return (
        <>
            <Header title={data.title} navigation={navigation} />
            <ScrollView>
                <View style={styles.gridFlex}>
                    <ListCard item={data} customStyles={styles.cardStyles} />
                    <ListCard item={data} customStyles={styles.cardStyles} />
                </View>
            </ScrollView>
            <FloatingButton
                onPress={() => navigation.navigate('FormScreen', data)}
                icon={plus}
            />
        </>
    )
}

