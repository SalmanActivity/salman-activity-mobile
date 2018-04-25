import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignSelf: 'center'
  },
  button: {
    padding: Metrics.baseMargin,
    margin: Metrics.baseMargin,
    marginBottom: 0
  },
  buttonAccept: {
    backgroundColor: Colors.tealPrimary
  },
  buttonReject: {
    backgroundColor: Colors.fire
  },
  separator: {
    height: 10
  },
  errorText: {
    color: Colors.fire,
    alignSelf: 'center',
    fontSize: Fonts.size.small,
    marginTop: Metrics.baseMargin
  }
})
