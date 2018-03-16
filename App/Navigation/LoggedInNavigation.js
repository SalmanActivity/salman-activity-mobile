import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import UserListScreen from '../Containers/UserListScreen'

const LoggedInNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  UserListScreen: {
    screen: UserListScreen,
    navigationOptions: {drawerLabel: 'Pengguna'}
  }
})

export default LoggedInNavigation
