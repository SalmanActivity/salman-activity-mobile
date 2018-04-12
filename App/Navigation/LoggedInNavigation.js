import { DrawerNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserListScreen from '../Containers/UserListScreen'
import LocationListScreen from '../Containers/LocationListScreen'
import DivisionListScreen from '../Containers/DivisionListScreen'
import RequestListScreenAdmin from '../Containers/RequestListScreenAdmin'
import RequestScreenAdmin from '../Containers/RequestScreenAdmin'

const LoggedInNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  RequestAdminNavigation: {
    screen: StackNavigator({
      RequestListScreenAdmin: { screen: RequestListScreenAdmin },
      RequestScreenAdmin: { screen: RequestScreenAdmin }
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
  DivisionListScreen: {
    screen: DivisionListScreen,
    navigationOptions: {drawerLabel: 'Manajemen Bidang'}
  }
})

export default LoggedInNavigation
