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
            width: 250,
            height: 250,
            cropping: true
        })
            .then(image => {
                console.log(image)
                setImage(image);
                setVisible(false)
            })
            .catch(err => {
                console.log('not selected')
                setVisible(false)
            })

    }

    function openCamera() {

        ImagePicker.openCamera({
            width: 250,
            height: 250,
            cropping: true,
        })
            .then(image => {
                setImage(image);
                setVisible(false)
            })
            .catch(err => {
                console.log('not selected')
                setVisible(false)
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