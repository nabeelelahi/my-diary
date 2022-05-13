import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './signup';
import globalStyles from '~/assets/styles/globalStyles';
import {
    arroba,
    password,
    person
} from '~/assets';
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Button';
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


    return (
        <GradientContainer topContainer={true}>
            <Text style={{...globalStyles.title, ...styles.title}}>Sign Up</Text>
            <Formik
                validationSchema={schema}
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={(values) => console.log(values)}
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
                                    style={{ ...globalStyles.baseButton, ...styles.button }}
                                    textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
                                />
                            </TouchableOpacity>
                            <View style={{...globalStyles.dontHaveAccountBox, ...globalStyles.centerContent}}>

                                <Text style={globalStyles.dontHaveAnAccountText}>Joined us before?</Text>
                                <TouchableOpacity>
                                    <Text style={globalStyles.dontHaveAnAccountLink}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
                }
            </Formik>

        </GradientContainer>
    )

}