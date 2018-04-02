import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import RequestActions from '../Redux/RequestRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import {Button} from 'react-native-elements'

// Styles
import styles from './Styles/RequestScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    //const {token, getRequests} = this.props
    //getRequests(token, 6, 1970)
  }
  render () {
    const {request} = this.props
    const {requests, fetchingRequests, fetchingRequestsError} = request

    /*const item = requests.map(request => ({
      id = request.id,
      name = "aaaa",
      issuedTime = "25/09/1998 13:23:22",
      description = "lalallaa",
      division = "Bidang Kotak",
      location = "Lololokakasisi",
      startTime = "22/12/1999 12:23",
      endTime = "22/12/1999 22:23",
      participantNumber = 40,
      speaker = "Akuu"
    }))

    /*const transformedRequests = requests.map(request => ({
      id: request.id,
      title: `${request.name} (${request.status}) - ${request.division.name}`,
      subtitle: `${request.startTime} - ${request.endTime}`
    }))*/

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.text}>Nama Acara </Text> 
            <Text style={styles.innerText}>AAA</Text>
          <Text style={styles.text}>Disubmit pada</Text>
            <Text style={styles.innerText}>2012/12</Text>
          <Text style={styles.text}>Deskripsi</Text>
            <Text style={styles.innerText}>aslkdjasldkj</Text>
          <Text style={styles.text}>Bidang</Text>
            <Text style={styles.innerText}>aslfnaslkfj</Text>
          <Text style={styles.text}>Lokasi</Text>
            <Text style={styles.innerText}>askljlaskjd</Text>
          <Text style={styles.text}>Waktu mulai</Text>
            <Text style={styles.innerText}>2012/12</Text>
          <Text style={styles.text}>Waktu selesai</Text>
            <Text style={styles.innerText}>2012/12</Text>
          <Text style={styles.text}>Jumlah peserta</Text>
            <Text style={styles.innerText}>2012</Text>
          <Text style={styles.text}>Pembicara</Text>
            <Text style={styles.innerText}>akuuu</Text>
          
          <Text style={styles.warningText}>Peringatan!</Text>
          <Text style={styles.innerText}>Sudah ada acara lain yang disetujui pada waktu tersebut</Text>
          <Text style={styles.innerText}>Ada acara lain yang mengajukan pada waktu tersebut</Text>
          <Text style={styles.innerText}>((Nama acara))</Text>
          <Text style={styles.innerText}>((waktu submit))</Text>
          <Button
            title='Setujui'
            buttonStyle={styles.button}
            //onPress={props.handleSubmit}
            //loading={!!props.disabled}
            //disabled={!!props.disabled}
          />
          <Button
            title='Tolak'
            buttonStyle={styles.buttonReject}
            //onPress={props.handleSubmit}
            //loading={!!props.disabled}
            //disabled={!!props.disabled}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  request: state.request
})

const mapDispatchToProps = {
  getRequests: RequestActions.getRequests
}

export default connect(mapStateToProps,
  mapDispatchToProps)(RequestListScreenAdmin)
