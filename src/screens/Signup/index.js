import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    ToastAndroid
} from 'react-native'
import FlashMessage from "react-native-flash-message";
import { styles } from './signup';
import globalStyles from '~/assets/styles/globalStyles';
import {
    arroba,
    password,
    person
} from '~/assets';
import UploadImageModal from '~/components/dedicated/Modals/UploadImage'
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Buttons/Button';
import AuthInput from '~/components/shared/Inputs/AuthInput'
import { _signUp } from '~/repositories/auth'
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string()
        .required()
        .test("Email", "Email must fullfill the requirement example abc@gmail.com", (val) => {
            return (
                new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/igm).test(val)
            )
        }),
    name: yup.string()
        .required()
        .min(6),
    password: yup.string()
        .required()
        .min(6),
})

export default function Signup({ navigation }) {

    const inputs = [
        { name: 'email', placeHolder: 'Email...', source: arroba, key: '1' },
        { name: 'name', placeHolder: 'Name...', source: person, key: '2' },
        { name: 'password', placeHolder: 'Password...', source: password, key: '3' },
    ]

    const [isLoading, setIsLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [image, setImage] = useState(null)

    function _handleSubmit(values){
        if(image && image?.path){
            let payload = new FormData();
            payload.append('email', values.email)
            payload.append('password', values.password)
            payload.append('name', values.name)
            payload.append('image', image)
            _signUp(payload, navigation, setIsLoading)
        }
        else{
            ToastAndroid.show('Profile image is required', ToastAndroid.SHORT) 
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <GradientContainer contentType='form'>
                        <Text style={{ ...globalStyles.title, ...styles.title }}>Sign Up</Text>
                        <TouchableOpacity
                            style={styles.profilePhoto}
                            onPress={() => setVisible(true)}
                        >
                            {
                                image  && image?.path ?
                                    <Image source={image?.path} style={styles.profilePhotoImage} />
                                    :
                                    <Text style={styles.profilePhotoText}>Click here to upload image profile image</Text>
                            }
                        </TouchableOpacity>
                        <Formik
                            validationSchema={schema}
                            initialValues={{ email: '', password: '', name: '' }}
                            onSubmit={_handleSubmit}
                        >
                            {(props) => {
                                return (
                                    <>
                                        {
                                            inputs.map(item => (
                                                <AuthInput
                                                    key={item.key}
                                                    item={item}
                                                    data={props}
                                                />
                                            ))
                                        }
                                        <TouchableOpacity onPress={props.handleSubmit}>
                                            <Button
                                                title="Continue"
                                                isLoading={isLoading}
                                                style={{ ...globalStyles.baseButton, ...styles.button }}
                                                textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ ...globalStyles.dontHaveAccountBox, ...globalStyles.centerContent }}>

                                            <Text style={globalStyles.dontHaveAnAccountText}>Joined us before?</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                                <Text style={globalStyles.dontHaveAnAccountLink}>Login</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                )
                            }
                            }
                        </Formik>
                    </GradientContainer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <FlashMessage position="top" />
            <UploadImageModal
                visible={visible}
                setVisible={setVisible}
                setImage={setImage}
            />
        </ScrollView >
    )

}