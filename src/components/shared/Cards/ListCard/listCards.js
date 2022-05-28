import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";

export const styles = StyleSheet.create({
    defaultCard: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.primary,

    },
    customCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.primary
    },
    icon: {
        height: 20,
        width: 20
    },
    forward: {
        height: 12,
        width: 12
    },
    key: {
        color: colors.primary,
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 11,
        textAlign: 'center',
        width: '100%'
    },
    value: {
        color: colors.baseBlack,
        marginHorizontal: 15,
        fontSize: 11,
        textAlign: 'center',
        width: '100%'
    },
    column: {
        height: metrices.HEIGHT(0.06),
        width: metrices.WIDTH() / 3,
        borderWidth: 0.2,
        borderColor: colors.primary,
        backgroundColor: '#fafafa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    }
})