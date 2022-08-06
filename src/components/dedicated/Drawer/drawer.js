import { StyleSheet } from "react-native";
import colors from '~/constants/colors'
import metrices from '~/constants/metrices'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: metrices.HEIGHT(0.875),
    },
    topView:{
        height: metrices.HEIGHT(0.25),
        paddingHorizontal: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title:{
        color: colors.baseWhite,
        fontWeight: 'bold',
        marginHorizontal: '5%',
        fontSize: 17
    }
});