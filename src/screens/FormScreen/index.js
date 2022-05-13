import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { styles } from './formScreen';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import Button from '~/components/shared/Button';
import { Formik } from 'formik';
import schemas from '~/config/DummyData/validations'
import initialValues from '~/config/DummyData/validations'
import formFields from '~/config/DummyData/formFields';
import { arrow, personalInfo } from '~/assets'
import BaseInput from '~/components/shared/Inputs/BaseInput';
import Avatar from '~/components/shared/Avatar';

export default function FormScreen({ navigation }) {

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <GradientContainer>
                    <View style={styles.topContainer}>
                        <Image resizeMode='contain' style={styles.back} source={arrow} />
                        <View style={globalStyles.centerContent}>
                            <Image resizeMode='contain' style={styles.logo} source={personalInfo} />
                            <Text style={globalStyles.title}>Personal Info</Text>
                        </View>
                        <View>
                            <Avatar />
                        </View>
                    </View>
                    <Formik
                        validationSchema={schemas.personalInfo}
                        initialValues={initialValues.personalInfo}
                        onSubmit={(values) => console.log(values)}
                    >
                        {(props) => {
                            return (
                                <>
                                    {
                                        formFields.personalInfo.map(item => (
                                            <BaseInput
                                                key={item.name}
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
                                </>
                            )
                        }
                        }
                    </Formik>
                </GradientContainer>
            </KeyboardAvoidingView>
        </ScrollView>
    )

}