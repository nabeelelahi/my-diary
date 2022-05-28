import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import GridCard from '~/components/shared/Cards/GridCard'
import Header from '~/components/shared/Header'
import subTabs from '../../config/Data/subTabs'
import { styles } from './subTabs'

export default function SubTabs({ navigation, route }) {

    const { title, slug } = route.params;
    const data = route.params;

  function redirect(item) {
    if (item.slug === 'specialCare') console.log(item.slug)
    else navigation.navigate('ViewScreen', item) 
  }

  return (
    <>
      <Header title={title} navigation={navigation} />
      <ScrollView>
        <View style={styles.gridFlex}>
          {
            subTabs[slug]?.map((item, index) => (
              <GridCard
                key={item.slug}
                item={item}
                index={index + 1}
                onPress={() => redirect(item)}
              />
            ))
          }
        </View >
      </ScrollView>
    </>
  )
}

