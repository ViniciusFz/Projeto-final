import config from "(./src/services/api)"
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      matricula: '',
      password: '',
    };
  }
  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.logo} source={require('./assets/x9.png')} />

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('./assets/usercinza.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Matrícula"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('./assets/graylock.png')}
          />

          <TextInput
            style={styles.inputs}
            placeholder="senha"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>ACESSAR</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}>
          <Text>Esqueci minha senha</Text>
        </TouchableHighlight>
        <Image
          style={{ width: 80, height: 80 }}
          source={require('./assets/IFMA.png')}
        />

        <Image style={{ width: 20, height: 20 }} />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
});

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#10090C',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    marginTop: 20,
    borderBottomColor: '#10090C',
    flex: 1,
  },
  inputIcon: {
    width: 15,
    height: 20,
    marginLeft: 15,
    justifyContent: 'center',
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
  },
  loginButton: {
    backgroundColor: '#48AE78',
  },
  loginText: {
    color: 'white',
  },
  logo: {
    height: 180,
    width: 180,
  },
});

export default createAppContainer(TabNavigator);
