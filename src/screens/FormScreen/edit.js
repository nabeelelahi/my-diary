import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import FlashMessage from "react-native-flash-message";
import { styles } from './formScreen';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Buttons/Button';
import { Formik } from 'formik';
import schemas from '~/config/Data/validations'
import formFields from '~/config/Data/formFields';
import { arrow, logo } from '~/assets'
import { _update } from '~/repositories/info';
import BaseInput from '~/components/shared/Inputs/BaseInput';
import Avatar from '~/components/shared/Avatar';
import * as yup from 'yup'

export default function EditFormScreen({ navigation, route }) {

    const { params } = route;

    const [isLoading, setIsLoading] = useState(false)

    return (
        <KeyboardAvoidingView style={styles.avoidView}>
            <ScrollView style={styles.scrollView}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <GradientContainer contentType={'form'}>
                        <View style={styles.topContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image resizeMode='contain' style={styles.back} source={arrow} />
                            </TouchableOpacity>
                            <View style={globalStyles.centerContent}>
                                <Image resizeMode='contain' style={styles.logo} source={params?.icon || logo} />
                                <Text style={globalStyles.title}>{params.title || 'My Medical Diary'}</Text>
                            </View>
                            <View>
                                <Avatar />
                            </View>
                        </View>
                        <Formik
                            validationSchema={schemas[params.slug] || yup.object({})}
                            initialValues={params.values || {}}
                            onSubmit={(values, actions) => _update(params.values._id, values, params.slug, actions, setIsLoading)}
                        >
                            {(props) => {
                                return (
                                    <>
                                        {
                                            formFields[params.slug]?.map(item => (
                                                <BaseInput
                                                    key={item.name}
                                                    item={item}
                                                    data={props}
                                                />
                                            ))
                                        }
                                        <TouchableOpacity onPress={props.handleSubmit}>
                                            <Button
                                                title="Save"
                                                isLoading={isLoading}
                                                style={{ ...globalStyles.baseButton, ...styles.button }}
                                                textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
                                            />
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                            }
                        </Formik>
                    </GradientContainer>
                </TouchableWithoutFeedback>
            </ScrollView>
            <FlashMessage position="top" />
        </KeyboardAvoidingView>
    )

}