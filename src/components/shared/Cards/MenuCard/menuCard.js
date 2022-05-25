import { StyleSheet } from "react-native";
import colors from "~/constants/colors";
import metrices from "~/constants/metrices";

export const styles = StyleSheet.create({
    card: {
        height: 40,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: colors.baseBlack,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginVertical: '2%'
    },
    icon: {
        height: 20,
        width: 20
    },
    forward: {
        height: 12,
        width: 12
    },
    title: {
        color: colors.baseWhite,
        marginHorizontal: 15,
        fontSize: 12
    }
})