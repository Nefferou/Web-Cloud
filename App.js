import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import {signup} from "./auth_signup_password";
import {signin} from "./auth_signin_password";

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View>
      <Text>Email</Text>
      <TextInput
      onChangeText={onChangeEmail}
      value={email}>
      </TextInput>
      <Text>Password</Text>
      <TextInput
      onChangeText={onChangePassword}
      value={password}
      secureTextEntry={true}>
      </TextInput>
      <Button title="Signup !" onPress={() => signup(email, password)} />
      <Button title="Signin !" onPress={() => signin(email, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
