import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
        <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
