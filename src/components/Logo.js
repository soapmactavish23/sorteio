import React from 'react'
import { Image,StyleSheet } from 'react-native'
import Logo from '../img/logo.png'

export default props => {
    return (
        <Image source={Logo} style={styles.imgLogo}></Image>
    )
}

const styles = StyleSheet.create({
    imgLogo: {
        width: '100%',
        resizeMode: 'stretch'
    }
})