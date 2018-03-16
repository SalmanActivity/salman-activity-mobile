import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import UserActions from '../Redux/UserRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'

// Styles
import styles from './Styles/UserListScreenStyles'

class UserListScreen extends Component {
  componentDidMount () {
    const {token, getUsers} = this.props
    getUsers(token)
  }

  render () {
    const {user} = this.props
    const {users, fetchingUsers} = user

    const transformedUsers = users.map(user => ({
      id: user.id,
      title: user.name,
      subtitle: user.division.name
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingUsers
            ? <ActivityIndicator />
            : (
              <DataList
                data={transformedUsers} />
            )
            }
        </ScrollView>
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
