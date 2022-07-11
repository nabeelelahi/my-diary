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
        height: metrices.HEIGHT(0.03),
        width: '7%',
    },
    input: {
        width: '90%',
        height: '100%',
        borderBottomWidth: 1,
        fontSize: 12.5,
        color: colors.baseWhite,
    },
    boxWhite: {
        color: colors.baseWhite,
        borderBottomColor: colors.secondary,
    },
    boxRed: {
        color: colors.validationRed,
        borderBottomColor: colors.validationRed,
    },
    errtxt: {
        color: colors.validationRed,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10
    }
})