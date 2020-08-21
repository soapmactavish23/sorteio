/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Alert
} from 'react-native';

import Bootstrap from './lib/Bootstrap'
import Logo from './components/Logo'
import Label from './components/Label'
import Btn from './components/Btn';

export default class Index extends Component {

  state = {
    num: '0'
  }

  sortear = () => {
    if(this.state.num == 0){
      Alert.alert("Erro", "Digite um número para sortear")
    }else{
      const numAleatorio = Math.floor(Math.random() * this.state.num)
      Alert.alert("Sucesso", "Número sorteado: " + numAleatorio)
    }
  }

  render() {
    const validations = []
    validations.push(this.state.num === 0)
    const validForm = validations.reduce((t, a) => t && a)
    return (
      <View style={Bootstrap.styles.container}>
        <Logo></Logo>
        <View style={Bootstrap.styles.container}>
          <View style={Bootstrap.styles.formGroup}>
            <Label>Número: </Label>
            <TextInput placeholder="Digite um número" style={[Bootstrap.styles.formControl, Bootstrap.styles.h3]} keyboardType={"numeric"} onChangeText={num => this.setState({num})}/>
          </View>
          <Btn onClick={this.sortear}>SORTEAR</Btn>
        </View>
      </View>
    );
  }
}
