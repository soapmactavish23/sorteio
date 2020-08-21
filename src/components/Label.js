import React from 'react'
import { Text } from 'react-native'
import Bootstrap from '../lib/Bootstrap'

export default props => {
    return (
        <Text style={Bootstrap.styles.h3}>{props.children}</Text>
    )
}