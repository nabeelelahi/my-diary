import { StyleSheet } from "react-native"
import metrices from "~/constants/metrices"

export const styles = StyleSheet.create({
            button: {
                height: metrices.HEIGHT(0.05),
                width: metrices.WIDTH(0.8),
                marginHorizontal: '5%',
                marginVertical: '10%',
                alignSelf: 'center',
                borderRadius: 75
            },
            buttonText: {
                fontWeight: 'bold',
                letterSpacing: 2,
                fontSize: 12
            },
            title:{
                marginVertical: metrices.HEIGHT(0.025),
                fontSize: 22.5
            }
        })