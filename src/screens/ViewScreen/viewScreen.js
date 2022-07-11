import { StyleSheet } from "react-native";
import metrices from '~/constants/metrices'
import colors from '~/constants/colors'

export const styles = StyleSheet.create({
    gridFlex: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardStyles: {
        width: metrices.WIDTH(),
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    flexView: {
        flex: 1,
        height: metrices.HEIGHT(0.75),
        justifyContent: 'center',
        alignItems: 'center'
    },
    noData: {
        height: metrices.HEIGHT(0.20),
    },
    noDataText:{
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold'
    }
})