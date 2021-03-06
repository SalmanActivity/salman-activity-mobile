import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import UserActions from '../Redux/UserRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import ActionButton from 'react-native-action-button'

// Styles
import styles from './Styles/UserListScreenStyles'

class UserListScreen extends Component {
  componentDidMount () {
    const {token, getUsers} = this.props
    getUsers(token)
  }

  render () {
    const {user, navigation: {navigate}} = this.props
    const {users, fetchingUsers, fetchingUsersError} = user

    const transformedUsers = users.map(user => ({
      id: user.id,
      title: `${user.admin ? '[ADMIN] ' : ''}${user.name} ` +
        `(${user.enabled ? '' : 'Tidak '}Aktif)`,
      subtitle: user.division ? user.division.name : 'Non-Bidang'
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingUsers
            ? <ActivityIndicator />
            : (
              fetchingUsersError
              ? <Text style={styles.error}>{fetchingUsersError}</Text>
              : <DataList data={transformedUsers} />
            )
          }
        </ScrollView>

        <ActionButton
          buttonColor='rgba(00,96,88,1)'
          onPress={() => navigate('NewUserScreen')}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  user: state.user
})

const mapDispatchToProps = {
  getUsers: UserActions.getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen)
