import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '../../Themes'

export default StyleSheet.create({
  primaryButton: {
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.tealPrimary,
    flex: 1
  },
  backButton: {
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    flex: 1
  }
})
