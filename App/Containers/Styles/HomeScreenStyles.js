import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

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
    alignItems: 'center'
  },

  monthPicker: {
    height: 30
  },

  refreshButton: {
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 5
  },

  sectionList: {
    paddingHorizontal: 10
  },

  monthPickerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10
  }
})
