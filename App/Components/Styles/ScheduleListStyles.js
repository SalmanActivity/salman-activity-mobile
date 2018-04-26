import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionItem: {
  	marginLeft: 10
  },
  headerView: {
    alignItems: 'flex-end',
    height: 25,
    flex: 1,
    marginVertical: 5,
    backgroundColor: 'transparent'
  },
  headerText: {
    paddingHorizontal: 15,    
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 50,
    textAlign: 'center',
    borderLeftWidth: 2,
    color: 'rgba(0, 0, 0, 1)'
  },
  contentView: {
    backgroundColor: 'transparent'
  }
})
