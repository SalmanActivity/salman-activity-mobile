import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    padding: Metrics.baseMargin
  },
  text: {
    fontSize: Fonts.style.h6.fontSize,
    fontFamily: Fonts.style.h6.fontFamily,
    color: Colors.tealPrimary,
    lineHeight: Fonts.size.h6 * 2
  },
  innerText: {
    fontSize: Fonts.style.normal.fontSize,
    fontFamily: Fonts.style.normal.fontFamily,
    paddingLeft: Metrics.doubleBseMargin,
    lineHeight: Fonts.size.normal * 2
  },
  warningText: {
    fontSize: Fonts.style.h6.fontSize,
    fontFamily: Fonts.style.h6.fontFamily,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  button: {
    padding: Metrics.baseMargin,
    margin: Metrics.baseMargin
  },
  buttonReject: {
    padding: Metrics.baseMargin,
    margin: Metrics.baseMargin,
    backgroundColor: 'red'
  },
  picture: {
    width: '100%',
    height: 250
  },
  closeButton: {
    fontSize: 35,
    color: 'black',
    lineHeight: 40,
    width: 40,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 1.5,
    shadowColor: 'white',
    shadowOpacity: 0.8
  }
})
