import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import NewUserForm from '../Forms/NewUserForm'

import styles from './Styles/LoginStyles'

export default class NewUser extends Component {
  static propTypes = {
    newUserHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }


  onSubmit (form) {
    const {newUserHandler} = this.props
    const {name, division, username, password, admin} = form
    if (admin !== true) {
      newadmin = false
    } else {
      newadmin = true
    }
    newUserHandler(name, division, username, password, newadmin)
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Pengguna Baru'>
        <NewUserForm
          onSubmit={this.onSubmit.bind(this)}
          backHandler={backHandler}
          disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
