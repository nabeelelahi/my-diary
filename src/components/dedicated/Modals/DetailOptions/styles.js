import { StyleSheet } from 'react-native'
import metrices from "~/constants/metrices"
import colors from "~/constants/colors"

export const styles = StyleSheet.create({
    modalcontainer: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalbody: {
        backgroundColor: colors.baseWhite,
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: '5%'
    },
    button: {
        height: metrices.HEIGHT(0.05),
        width: metrices.WIDTH(0.8),
        marginHorizontal: '5%',
        alignSelf: 'center',
        borderRadius: 75,
        backgroundColor: colors.primary,
        borderRadius: 25
    },
    edit: {
        backgroundColor: colors.primary,
    },
    delete: {
        backgroundColor: colors.primary,
    },
    cancel: {
        backgroundColor: colors.validationRed,
        width: metrices.WIDTH(0.6),
    },
    buttonText: {
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 12,
        color: colors.baseWhite
    },
})