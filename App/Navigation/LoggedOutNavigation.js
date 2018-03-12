import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'

const LoggedOutNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLabel: 'Login'
    }
  }
}, {
  initialRouteName: 'HomeScreen'
})

export default LoggedOutNavigation
