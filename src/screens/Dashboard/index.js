import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import GridCard from '~/components/shared/Cards/GridCard'
import Header from '~/components/shared/Header'
import { dashBoardOptions } from '~/config/Data/dashBoard'
import { styles } from './dashboard'

export default function Dashboard({ navigation }) {

  function redirect(item) {
    if (item.slug === 'specialCare') navigation.navigate('SubTabs', item) 
    else navigation.navigate('FormScreen', item)
  }

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
                length={dashBoardOptions.length}
                onPress={() => redirect(item)}
              />
            ))
          }
        </View >
      </ScrollView>
    </>
  )
}

