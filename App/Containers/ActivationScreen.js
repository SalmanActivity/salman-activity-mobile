import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import {connect} from 'react-redux'
import {Card, Button} from 'react-native-elements'

// Styles
import styles from './Styles/ActivationScreenStyles'

class HomeScreen extends Component {
  render () {
    const {navigation: {
      state: {params: {error, id, category, name, active, loading, update}}
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
                  loading={!!loading}
                  disabled={!!loading}
                />
              )}

              {!!active && (
                <Button
                  title='Non-Aktifkan'
                  buttonStyle={[styles.button, styles.buttonReject]}
                  onPress={() => update(id, {enabled: false})}
                  loading={!!loading}
                  disabled={!!loading}
                />
              )}

              {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
            </Card>
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

export default connect(null, null)(HomeScreen)
