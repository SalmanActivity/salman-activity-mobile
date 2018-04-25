import { DrawerNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserListScreen from '../Containers/UserListScreen'
import NewUserScreen from '../Containers/NewUserScreen'
import LocationListScreen from '../Containers/LocationListScreen'
import NewLocationScreen from '../Containers/NewLocationScreen'
import DivisionListScreen from '../Containers/DivisionListScreen'
import NewDivisionScreen from '../Containers/NewDivisionScreen'
import RequestListScreenAdmin from '../Containers/RequestListScreenAdmin'
import NewRequestScreen from '../Containers/NewRequestScreen'
import RequestScreenAdmin from '../Containers/RequestScreenAdmin'

const AdminNavigation = DrawerNavigator({
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
  },
  UserNavigation: {
    screen: StackNavigator({
      UserListScreen: { screen: UserListScreen },
      NewUserScreen: { screen: NewUserScreen }
    }, {
      headerMode: 'none',
      initialRouteName: 'UserListScreen'
    }),
    navigationOptions: {drawerLabel: 'Manajemen Pengguna'}
  },
  LocationNavigation: {
    screen: StackNavigator({
      LocationListScreen: {screen: LocationListScreen},
      NewLocationScreen: {screen: NewLocationScreen}
    }, {
      headerMode: 'none',
      initialRouteName: 'LocationListScreen'
    }),
    navigationOptions: {drawerLabel: 'Manajemen Tempat / Ruangan'}
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

export default AdminNavigation
