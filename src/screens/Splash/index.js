import React, { useRef, useEffect } from 'react';
import { Animated, Image, Text } from 'react-native';
import { styles } from './splash';
import { logo } from '~/assets';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import storage from '~/helpers/storage'

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
    navigate()
  }, [])

  async function navigate() {
    const user = await storage.get('user')
    if (user) {
      navigation.navigate('Home')
    }
    else {
      navigation.navigate('Disclaimer')
    }
  }

  return (
    <GradientContainer>
      <FadeInView style={globalStyles.centerContent}>
        <Image resizeMode='contain' style={styles.logo} source={logo} />
        <Text style={styles.title}>My Medical Diary</Text>
      </FadeInView>
    </GradientContainer>
  )
}