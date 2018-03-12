import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'

const LoggedInNavigation = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {drawerLabel: 'Home'} }
})

export default LoggedInNavigation
