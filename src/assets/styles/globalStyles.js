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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  termsText: {
    fontSize: 15,
    textAlign: 'center',
    margin: '5%',
    lineHeight: 24,
    color: colors.baseBlack
  },
  bottomModalcontainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomModalbody: {
    backgroundColor: colors.baseWhite,
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '5%'
  },
  modalButton: {
    height: metrices.HEIGHT(0.05),
    width: metrices.WIDTH(0.8),
    marginHorizontal: '5%',
    alignSelf: 'center',
    borderRadius: 75,
    backgroundColor: colors.primary,
    borderRadius: 25
  },
  modalCancel: {
    backgroundColor: colors.validationRed,
    width: metrices.WIDTH(0.6),
  },
  modalButtonText: {
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 12,
    color: colors.baseWhite
  },
});

export default globalStyles;