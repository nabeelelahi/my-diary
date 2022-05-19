import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";

export const styles = StyleSheet.create({
    opacity:{
        marginTop: metrices.HEIGHT(0.02),
        height: metrices.HEIGHT(0.225),
    },
    card: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        shadowColor: colors.baseBlack,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    },
    imageSmall: {
        height: metrices.HEIGHT(0.07),
        width: metrices.HEIGHT(0.07),
        marginVertical: metrices.HEIGHT(0.02)
    },
    imageLarge: {
        height: metrices.HEIGHT(0.13),
        width: metrices.HEIGHT(0.13),
        marginVertical: metrices.HEIGHT(0.01)
    },
    title:{
        color: colors.secondary,
    }
})