import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, ActivityIndicator, Text, RefreshControl } from 'react-native'
import Header from '~/components/shared/Header'
import FloatingButton from '~/components/shared/Buttons/FloatingButton'
import ListCard from '../../components/shared/Cards/ListCard'
import { _find } from '~/repositories/info';
import {
    plus,
    noData,
} from '~/assets'
import colors from '~/constants/colors'
import { styles } from './viewScreen'

export default function ViewScreen({ navigation, route }) {

    let renderData;

    const data = route.params;

    const [state, setState] = useState([])

    const [renderState, setRenderState] = useState('loading')
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        setRenderState('loading')
        hanldeFetch()
    }, [data.slug, route, navigation])

    async function hanldeFetch() {

        const res = await _find(data.slug)

        setState(res.data)

        if (res.data?.length) {
            setRenderState('render')
        }
        else {
            setRenderState('no_data')
        }

    }
    
    async function hanldeRefresh() {

        setRefreshing(true)

        const res = await _find(data.slug)

        setState(res.data)

        if (res.data?.length) {
            setRefreshing(false)
            setRenderState('render')
        }
        else {
            setRefreshing(false)
        }

    }

    if (renderState === 'loading') {
        renderData = (
            <View style={styles.flexView}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        )
    }
    else if (renderState === 'no_data') {
        renderData = (
            <View style={styles.flexView}>
                <Image style={styles.noData} resizeMode='contain' source={noData} />
                <Text style={styles.noDataText}>No Data</Text>
            </View>
        )

    }
    else {
        renderData = state?.map(item =>
            <ListCard
                key={item._id}
                data={item}
                item={data}
                customStyles={styles.cardStyles}
            />
        )
    }


    return (
        <>
            <Header title={data.title} navigation={navigation} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        colors={[colors.primary]}
                        refreshing={refreshing}
                        onRefresh={hanldeRefresh}
                    />
                }
            >
                <View style={styles.gridFlex}>
                    {renderData}
                </View>
            </ScrollView>
            <FloatingButton
                onPress={() => navigation.navigate('FormScreen', data)}
                icon={plus}
            />
        </>
    )
}

