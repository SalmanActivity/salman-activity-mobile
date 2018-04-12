import { DrawerNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserListScreen from '../Containers/UserListScreen'
import LocationListScreen from '../Containers/LocationListScreen'
import DivisionListScreen from '../Containers/DivisionListScreen'
import NewDivisionScreen from '../Containers/NewDivisionScreen'
import RequestListScreenAdmin from '../Containers/RequestListScreenAdmin'
import RequestScreenAdmin from '../Containers/RequestScreenAdmin'

const LoggedInNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  RequestAdminNavigation: {
    screen: StackNavigator({
      RequestListScreenAdmin: { screen: RequestListScreenAdmin },
      RequestScreenAdmin: { screen: RequestScreenAdmin }
    }, {
      headerMode: 'none',
      initialRouteName: 'RequestListScreenAdmin'
    }),
    navigationOptions: {drawerLabel: 'Permohonan Izin Aktivitas'}
  },
  UserListScreen: {
    screen: UserListScreen,
    navigationOptions: {drawerLabel: 'Manajemen Pengguna'}
  },
  LocationListScreen: {
    screen: LocationListScreen,
    navigationOptions: {drawerLabel: 'Manajemen Ruangan / Tempat'}
  },
  DivisionNavigation: {
    screen: StackNavigator({
      DivisionListScreen: {screen: DivisionListScreen},
      NewDivisionScreen: {screen: NewDivisionScreen}
    }, {
      headerMode: 'none',
      initialRouteName: 'DivisionListScreen'
    }),
    navigationOptions: {drawerLabel: 'Manajemen Bidang'}
  }
})

export default LoggedInNavigation
