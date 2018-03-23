import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserListScreen from '../Containers/UserListScreen'
import LocationListScreen from '../Containers/LocationListScreen'
import DivisionListScreen from '../Containers/DivisionListScreen'

const LoggedInNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
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
