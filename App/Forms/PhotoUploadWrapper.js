import React from 'react'
import {Image} from 'react-native'
import PhotoUpload from 'react-native-photo-upload'

import styles from './Styles/PhotoUploadWrapperStyles'

const PhotoUploadWrapper = (props) => {
  const { input: { onChange, value, ...inputProps }, data,
  ...photoUploadProps } = props

  return (
    <PhotoUpload
      format='JPEG'
      onPhotoSelect={avatar => {
        requestAnimationFrame(() => {
          onChange(`data:image/jpeg;base64,${avatar}`)
        })
      }}
      {...inputProps}
      {...photoUploadProps}
    >
      <Image
        style={styles.photo}
        resizeMode='contain'
        source={require('../Images/upload.png')}
      />
    </PhotoUpload>
  )
}

export default PhotoUploadWrapper
