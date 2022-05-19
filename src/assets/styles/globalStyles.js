import { StyleSheet } from 'react-native';
import colors from '~/constants/colors'
import metrices from '~/constants/metrices'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.baseWhite,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  topContainer: {
    height: metrices.HEIGHT(0.27),
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.baseWhite,
    fontSize: 15,
    fontWeight: '800'
  },
  logo: {
    height: metrices.HEIGHT(0.18),
    width: metrices.WIDTH(0.5)
  },
  baseButton: {
    backgroundColor: colors.baseWhite,
  },
  baseButtonText: {
    color: colors.primary
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.baseWhite
  },
  transparentButtonText: {
    color: colors.baseWhite
  },
  dontHaveAccountBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dontHaveAnAccountText: {
    color: colors.baseWhite,
    fontSize: 12,
  },
  dontHaveAnAccountLink: {
    color: colors.secondary,
    fontSize: 12,
    marginHorizontal: 5,
    fontWeight: 'bold'
  }
});

export default globalStyles;