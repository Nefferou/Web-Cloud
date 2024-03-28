import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import {signup} from "./auth_signup_password";

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
      style={style.input}
      onChangeText={onChangeEmail}
      value={email}>
      <Text>Password</Text>
      <TextInput
      style={style.input}
      onChangeText={onChangePassword}
      value={password}
      secureTextEntry={true}></TextInput>
      </TextInput>
      <Button title="Signup !" onPress={() => signup(email, password)} />
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
