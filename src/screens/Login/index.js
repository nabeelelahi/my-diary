import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { _login } from '~/repositories/auth';
import { styles } from './login';
import FlashMessage from "react-native-flash-message";
import globalStyles from '~/assets/styles/globalStyles';
import {
    arroba,
    password
} from '~/assets';
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Buttons/Button';
import AuthInput from '~/components/shared/Inputs/AuthInput'
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
    password: yup.string()
        .required()
        .min(6),
})

export default function Login({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)

    const inputs = [
        { name: 'email', placeHolder: 'Email...', source: arroba, key: '1' },
        { name: 'password', placeHolder: 'Password...', source: password, key: '3' }
    ]

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <GradientContainer topContainer={true} contentType='form'>
                        <Text style={{ ...globalStyles.title, ...styles.title }}>Log in</Text>
                        <Formik
                            validationSchema={schema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => _login(values, navigation, setIsLoading)}
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
                                                title="Login"
                                                isLoading={isLoading}
                                                style={{ ...globalStyles.baseButton, ...styles.button }}
                                                textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ ...globalStyles.dontHaveAccountBox, ...globalStyles.centerContent }}>

                                            <Text style={globalStyles.dontHaveAnAccountText}>New to My Medical Diary?</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                                <Text style={globalStyles.dontHaveAnAccountLink}>Register</Text>
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
        </ScrollView>
    )

}