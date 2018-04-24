import { DrawerNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import RequestListScreenAdmin from '../Containers/RequestListScreenAdmin'
import NewRequestScreen from '../Containers/NewRequestScreen'
import RequestScreenAdmin from '../Containers/RequestScreenAdmin'

const RegularNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  RequestAdminNavigation: {
    screen: StackNavigator({
      RequestListScreenAdmin: { screen: RequestListScreenAdmin },
      RequestScreenAdmin: { screen: RequestScreenAdmin },
      NewRequestScreen: { screen: NewRequestScreen }
    }, {
      headerMode: 'none',
      initialRouteName: 'RequestListScreenAdmin'
    }),
    navigationOptions: {drawerLabel: 'Permohonan Izin Aktivitas'}
  }
})

export default RegularNavigation
