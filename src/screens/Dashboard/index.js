import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import GridCard from '~/components/shared/Cards/GridCards'
import Header from '~/components/shared/Header'
import { dashBoardOptions } from '~/config/Data/dashBoard'
import { styles } from './dashboard'

export default function Dashboard({ navigation }) {
  return (
    <>
      <Header title={'Dashboard'} navigation={navigation} />
      <ScrollView>
        <View style={styles.gridFlex}>
          {
            dashBoardOptions.map((item, index) => (
              <GridCard
                key={item.slug}
                item={item}
                index={index + 1}
                onPress={() => navigation.navigate('FormScreen', item)}
              />
            ))
          }
        </View >
      </ScrollView>
    </>
  )
}

