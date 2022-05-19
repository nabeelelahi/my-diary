import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/constants/colors';
import globalStyles from '~/assets/styles/globalStyles';
import { logo } from '~/assets';
import metrices from '~/constants/metrices';

export default function GradientContainer({ children, topContainer, contentType = 'plain' }) {

    let topView;
    let baseStyles;

    if (topContainer) {
        topView = (
            <View style={globalStyles.topContainer}>
                <Image resizeMode='contain' style={globalStyles.logo} source={logo} />
                <Text style={globalStyles.title}>My Medical Diary</Text>
            </View>
        )
        baseStyles = globalStyles.container
    }
    else {
        topView = (
            <></>
        )
        baseStyles = {...globalStyles.container, ...globalStyles.centerContent }
    }
    
    if(contentType === 'form'){
        baseStyles = {...globalStyles.container, alignItems: 'center', minHeight: metrices.HEIGHT() }
    }
 


    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors.baseGradient}
            style={baseStyles}
        >
            {topView}
            {children}
        </LinearGradient>
    )
}