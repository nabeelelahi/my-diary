import { StyleSheet } from "react-native"
import colors from "~/constants/colors" 
import metrices from "~/constants/metrices"

export const styles = StyleSheet.create({
            button: {
                height: metrices.HEIGHT(0.05),
                width: metrices.WIDTH(0.7),
                marginHorizontal: '5%',
                marginVertical: '7.5%',
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
            },
            forgotPassword:{
                color: colors.secondary,
                marginHorizontal: metrices.WIDTH(0.1),
                alignSelf: 'flex-end',
                marginTop: metrices.HEIGHT(0.02)
            }
        })