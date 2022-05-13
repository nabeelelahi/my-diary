import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";

export const styles = StyleSheet.create({
    header: {
        height: metrices.HEIGHT(0.175),
        width: metrices.WIDTH(),
    },
    rowFlex: {
        flexDirection: 'row',
        height: '65%',
        width: '95%',
        justifyContent: 'space-between'
    },
    columnFlex: {
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between'
    },
    title: {
        color: colors.baseWhite,
        fontWeight: 'bold',
        fontSize: 20
    },
})