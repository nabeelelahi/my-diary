import React from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import FlashMessage from "react-native-flash-message";
import Button from '~/components/shared/Buttons/Button'
import globalStyles from '~/assets/styles/globalStyles'
import { _delete } from '~/repositories/info'

export default function UploadImageModal({ visible, setVisible, setImage }) {

    function openGallery() {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                setImage(image);
            })
            .catch(err => {
                console.log('not selected')
            })

    }

    function openCamera() {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(image => {
                setImage(image);
            })
            .catch(err => {
                console.log('not selected')
            })

    }

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true} >
            <View style={globalStyles.bottomModalcontainer}>
                <View style={globalStyles.bottomModalbody}>
                    <TouchableOpacity onPress={openCamera}>
                        <Button
                            title="Take Photo"
                            style={globalStyles.modalButton}
                            textStyle={globalStyles.modalButtonText}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openGallery}>
                        <Button
                            title="Upload Photo"
                            style={globalStyles.modalButton}
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
                </View>
            </View>
            <FlashMessage position="top" />
        </Modal>
    )
}