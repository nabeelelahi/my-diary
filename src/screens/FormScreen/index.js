import React from 'react';
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
import { styles } from './formScreen';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Button';
import { Formik } from 'formik';
import schemas from '~/config/Data/validations'
import initialValues from '~/config/Data/validations'
import formFields from '~/config/Data/formFields';
import { arrow, logo } from '~/assets'
import BaseInput from '~/components/shared/Inputs/BaseInput';
import Avatar from '~/components/shared/Avatar';
import * as yup from 'yup'

export default function FormScreen({ navigation, route }) {

    const { params } = route;

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
                        initialValues={initialValues[params.slug] || {}}
                        onSubmit={(values) => console.log(values)}
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
        </KeyboardAvoidingView>
    )

}