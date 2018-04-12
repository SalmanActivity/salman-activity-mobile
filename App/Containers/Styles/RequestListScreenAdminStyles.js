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
  },
  monthPickerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10
  },
  monthPicker: {
    height: 30
  },
  refreshButton: {
    backgroundColor: Colors.tealPrimary,
    height: 40,
    borderRadius: 5
  }
})
