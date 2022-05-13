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

//   async function getUser() {

//     const currentUserString = await AsyncStorage.getItem("user")

//     const currentUser = JSON.parse(currentUserString)

//    if(currentUser){

//     if (currentUser?.type === "guest") {
//       navigation.navigate("Guest")
//     }
//     else {
//       getStatus(currentUser).then(status => {
//         if (status === 'APPROVED') {
//           if (currentUser?.type === "sponsor") navigation.navigate("Sponser")

//           else if (currentUser?.type === "doctor") navigation.navigate("Doctor")

//           else if (currentUser?.type === "beneficiary") navigation.navigate("Beneficiary")

//         }
//         else {

//           navigation.navigate("AccountDisabled", {status})

//         }
//       })
//     }

//    }
//    else{
//      navigation.navigate('Start')
//    }

//   }

//   async function getStatus(currentUser) {

//     if (currentUser) {

//       const url = `common/GET/status/${currentUser.type}/${currentUser.id}`

//       const response = await http(url)

//       if (response?.success) {
//         return response.data.status
//       }
//       else {
//         navigation.navigate('NoInternet')
//       }

//     }
//     else {
//       navigation.navigate("Start")
//     }
//   }

//   useFocusEffect(
//     React.useCallback(() => {
//       NetInfo.fetch().then(state => {
//         // console.log(state)
//         if (state.isConnected) getUser()
//         else navigation.navigate('NoInternet')
//       });
//     }, [navigation])
//   );

//   useEffect(() => {
//     setTimeout(() => {
//       NetInfo.fetch().then(state => {
//         // console.log(state)
//         if (state.isConnected) getUser()
//         else navigation.navigate('NoInternet')
//       });
//     }, 1500);
//   }, [])

  return (
    <GradientContainer>
      <FadeInView style={globalStyles.centerContent}>
        <Image resizeMode='contain' style={styles.logo} source={logo} />
        <Text style={styles.title}>My Medical Diary</Text>
      </FadeInView>
    </GradientContainer>
  )
}