import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import GridCard from '~/components/shared/Cards/GridCards'
import Header from '~/components/shared/Header'
import { dashBoardOptions } from '~/config/DummyData/dashBoard'
import { styles } from './dashboard'

function Dahboard() {
  return (
    <>
      <Header title={'Dashboard'} />
      <ScrollView>
        <View style={styles.gridFlex}>
          {
            dashBoardOptions.map((item, index) => (
              <GridCard key={item.title} item={item} index={index + 1} />
            ))
          }
        </View >
      </ScrollView>
    </>
  )
}

export default Dahboard