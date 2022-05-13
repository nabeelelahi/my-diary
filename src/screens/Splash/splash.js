import { StyleSheet } from 'react-native';
import colors from '~/constants/colors'
import metrices from '~/constants/metrices'

export const styles = StyleSheet.create({
    title:{
      marginTop: metrices.HEIGHT(0.025),
      color: colors.baseWhite,
      fontSize: 20,
      fontWeight: '800'
    },
    logo:{
       height: metrices.HEIGHT(0.3),
       width: metrices.WIDTH(0.9)
    },
  
  });
  