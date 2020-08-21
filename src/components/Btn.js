import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import Bootstrap from '../lib/Bootstrap'

export default props => {
    return (
        <TouchableHighlight style={[Bootstrap.styles.btnDanger, Bootstrap.styles.btn, Bootstrap.styles.roundedCircle]} onPress={() => props.onClick()}>
            <Text style={[Bootstrap.styles.h3, Bootstrap.styles.textLight, Bootstrap.styles.textCenter]}>{props.children}</Text>
        </TouchableHighlight>
    )
}