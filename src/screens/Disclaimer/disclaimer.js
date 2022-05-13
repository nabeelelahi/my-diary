import { StyleSheet } from "react-native"
import metrices from "~/constants/metrices"

export const styles = StyleSheet.create({
            button: {
                height: metrices.HEIGHT(0.035),
                width: metrices.WIDTH(0.175),
                marginHorizontal: '5%',
                marginVertical: '10%',
                alignSelf: 'flex-end'
            },
            buttonText: {
                fontWeight: 'bold',
                letterSpacing: 2,
                fontSize: 12
            },
        })