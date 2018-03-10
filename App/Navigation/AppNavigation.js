import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLabel: 'Login'
    }
  }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
