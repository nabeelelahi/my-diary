import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, ActivityIndicator, Text, RefreshControl, TouchableOpacity } from 'react-native'
import Header from '~/components/shared/Header'
import DetailOptionsModal from '~/components/dedicated/Modals/DetailOptions'
import FloatingButton from '~/components/shared/Buttons/FloatingButton'
import ListCard from '~/components/shared/Cards/ListCard'
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
    const [visible, setVisible] = useState(false)
    const [item, setItem] = useState(null)

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

    function onLongPress(value) {
        setItem(value)
        setVisible(true)
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
        renderData = state?.map(item => (
            <TouchableOpacity onLongPress={() => onLongPress(item)}>
                <ListCard
                    key={`${Math.random() * 10000000}`}
                    data={item}
                    item={data}
                    customStyles={styles.cardStyles}
                />
            </TouchableOpacity>
        ))
    }


    return (
        <>
            <Header type={'back'} title={data.title} navigation={navigation} />
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
            <DetailOptionsModal
                data={data}
                item={item}
                visible={visible}
                setVisible={setVisible}
                navigation={navigation}
            />
        </>
    )
}

