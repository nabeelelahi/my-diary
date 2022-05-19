import { StyleSheet } from "react-native"
import metrices from "~/constants/metrices"
import colors from "~/constants/colors"

export const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        
    },
    avoidView:{
        flex: 1,
    },
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
        fontSize: 22.5
    },
    topContainer: {
        height: metrices.HEIGHT(0.25),
        width: metrices.WIDTH(),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    },
    title: {
        color: colors.baseWhite,
        fontSize: 15,
        fontWeight: '800'
    },
    logo: {
        height: metrices.HEIGHT(0.08),
        width: metrices.WIDTH(0.5),
        marginVertical: metrices.HEIGHT(0.02)
    },
    back:{
        height: 25,
        width: 25
    }
})