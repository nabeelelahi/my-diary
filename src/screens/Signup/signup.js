import { StyleSheet } from "react-native"
import metrices from "~/constants/metrices"
import colors from "~/constants/colors"

export const styles = StyleSheet.create({
    button: {
        height: metrices.HEIGHT(0.05),
        width: metrices.WIDTH(0.8),
        marginHorizontal: '5%',
        marginVertical: '10%',
        alignSelf: 'center',
        borderRadius: 75
    },
    buttonText: {
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 12
    },
    title: {
        marginVertical: metrices.HEIGHT(0.025),
        fontSize: 19,
        textAlign: 'center'
    },
    profilePhoto: {
        height: metrices.HEIGHT(0.2),
        width: metrices.HEIGHT(0.2),
        marginVertical: metrices.HEIGHT(0.025),
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePhotoImage: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    profilePhotoText: {
        letterSpacing: 2,
        fontSize: 12,
        color: colors.secondary
    }
})