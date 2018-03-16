import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  error: {
    alignSelf: 'center',
    color: Colors.fire
  },
  centered: {
    alignItems: 'center'
  }
})
