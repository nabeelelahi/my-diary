import React, { useState } from 'react'
import { Modal, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import FlashMessage from "react-native-flash-message";
import Button from '~/components/shared/Buttons/Button'
import colors from '~/constants/colors'
import globalStyles from '~/assets/styles/globalStyles'
import { _delete } from '~/repositories/info'

export default function DetailOptionsModal({ visible, setVisible, item, data, navigation }) {

    const [isLoading, setIsLoading] = useState(false)

    function onEdit() {
        data.values = item;
        navigation.navigate('EditFormScreen', data)
    }

    function onDelete() {
        _delete(item._id, data.slug, setIsLoading).then(() => setVisible(false))
    }

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true} >
            <View style={globalStyles.bottomModalcontainer}>
                <View style={globalStyles.bottomModalbody}>
                    {
                        isLoading ?
                            <ActivityIndicator size="large" color={colors.primary} />
                            :
                            <>
                                <TouchableOpacity onPress={onEdit}>
                                    <Button
                                        title="Edit"
                                        style={globalStyles.modalButton}
                                        textStyle={globalStyles.modalButtonText}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onDelete}>
                                    <Button
                                        title="Delete"
                                        style={styglobalStylesles.modalButton}
                                        textStyle={globalStyles.modalButtonText}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setVisible(false)} >
                                    <Button
                                        title="Cancel"
                                        style={{ ...globalStyles.modalButton, ...globalStyles.modalCancel }}
                                        textStyle={globalStyles.modalButtonText}
                                    />
                                </TouchableOpacity>
                            </>
                    }
                </View>

            </View>
            <FlashMessage position="top" />
        </Modal>
    )
}