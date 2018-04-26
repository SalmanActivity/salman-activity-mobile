import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import {connect} from 'react-redux'
import {Card, Button} from 'react-native-elements'

// Styles
import styles from './Styles/ActivationScreenStyles'

class HomeScreen extends Component {
  render () {
    const {state,
      navigation: {
      state: {params: {
        errorSelector, id, category, name, active, loadingSelector, update}}
    }} = this.props

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <ScrollView style={styles.section} >
            <Card title={`Manajemen ${category}`}>
              <Text style={styles.centered}>{name}</Text>

              <View style={styles.separator} />

              {!active && (
                <Button
                  title='Aktifkan'
                  buttonStyle={[styles.button, styles.buttonAccept]}
                  onPress={() => update(id, {enabled: true})}
                  loading={!!loadingSelector(state)}
                  disabled={!!loadingSelector(state)}
                />
              )}

              {!!active && (
                <Button
                  title='Non-Aktifkan'
                  buttonStyle={[styles.button, styles.buttonReject]}
                  onPress={() => update(id, {enabled: false})}
                  loading={!!loadingSelector(state)}
                  disabled={!!loadingSelector(state)}
                />
              )}

              {errorSelector(state)
                 ? <Text style={styles.errorText}>{errorSelector(state)}</Text>
                 : <View />
              }
            </Card>
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({state})

export default connect(mapStateToProps, null)(HomeScreen)
