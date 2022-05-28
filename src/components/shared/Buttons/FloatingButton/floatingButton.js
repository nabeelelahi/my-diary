import { StyleSheet } from "react-native";
import metrices from '~/constants/metrices'
import colors from '~/constants/colors'

export const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: '5%',
        right: '7.5%',
        height: 55,
        width: 55,
        backgroundColor: 'red',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    opacity: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    icon: {
        height: '45%',
        width: '45%'
    }
})