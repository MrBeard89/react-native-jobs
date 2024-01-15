import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconURL, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconURL} style={styles.btnImg(dimension)} resizeMode='cover' />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
