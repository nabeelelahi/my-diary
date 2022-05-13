import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";

export const styles = StyleSheet.create({
    imageBox: {
        height: 45,
        width: 45,
        borderWidth: 4,
        backgroundColor: 'transparent',
        borderColor: colors.baseWhite,
        borderRadius: 100,
    },
    image:{
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    text:{
        color: colors.baseWhite,
        fontSize: 12,
        marginTop: 5,
    }
})