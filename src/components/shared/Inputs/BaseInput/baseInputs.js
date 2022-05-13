import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";


export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: metrices.WIDTH(0.8),
        height: metrices.HEIGHT(0.06),
        alignSelf: 'center',
        marginVertical: '2.5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 0.3,
        borderWidth: 1,
        borderColor: colors.secondary,
        fontSize: 14
    },
    icon: {
        height: metrices.HEIGHT(0.035),
        width: '8%',
    },
    input: {
        width: '100%',
        // height: '100%',
        fontSize: 14
    },
    label:{
        fontSize: 12,
        color: colors.secondary
    }
})