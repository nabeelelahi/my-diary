import { StyleSheet } from 'react-native';
import metrices from '~/constants/metrices';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
    card:{
        width: metrices.WIDTH(0.65),
        height: metrices.HEIGHT(0.4),
        backgroundColor: colors.baseWhite,
        borderRadius: 7.5,
        alignSelf: 'center',
    },
    header:{
        height: '20%', 
        borderTopLeftRadius: 7.5,
        borderTopRightRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
        padding: '5%'
    },
    text:{
        fontSize: 12,
        color: colors.baseBlack,
        paddingBottom: '15%'
    }
});
