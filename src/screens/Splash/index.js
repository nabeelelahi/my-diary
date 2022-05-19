import React, { useRef, useEffect } from 'react';
// import { useFocusEffect } from "@react-navigation/native";
import { Animated, Image, View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './splash';
import { logo } from '~/assets';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
// import { http } from '@services';
// import NetInfo from "@react-native-community/netinfo";

const FadeInView = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function Splash({ navigation }) {

useEffect(() => {
  setTimeout(() => navigation.navigate('Disclaimer'), 1500)
})

  return (
    <GradientContainer>
      <FadeInView style={globalStyles.centerContent}>
        <Image resizeMode='contain' style={styles.logo} source={logo} />
        <Text style={styles.title}>My Medical Diary</Text>
      </FadeInView>
    </GradientContainer>
  )
}