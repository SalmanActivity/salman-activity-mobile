import React from 'react'
import {ScrollView, Image} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'
import PhotoUpload from 'react-native-photo-upload'

import TextInput from './TextInputWrapper'


import styles from './Styles/ActivityReportFormStyles'

const ActivityReportForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='Kegiatan'
      component={TextInput}
      autoFocus
      placeholder='Deskripsi Kegiatan'
    />

    <PhotoUpload
      onPhotoSelect={avatar => {
        if (avatar) {
          console.log('Image base64 string: ', avatar)
        }
      }}
    >
      <Image
        style={{
          paddingVertical: 30,
          width: 150,
          height: 150,
          borderRadius: 0
        }}
        resizeMode='cover'
        source={{
          uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
        }}
      />
    </PhotoUpload>
    

    <Button
      title='Lapor!'
      buttonStyle={styles.buttonPost}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />

  </ScrollView>
)

export default reduxForm({form: 'activityReport'})(ActivityReportForm)
