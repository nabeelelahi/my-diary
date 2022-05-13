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
        // paddingVertical: '1%',
        paddingHorizontal: '2%'
    },
    icon: {
        height: metrices.HEIGHT(0.035),
        width: '8%',
    },
    input: {
        width: '90%',
        height: '100%',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
        fontSize: 14
    }
})