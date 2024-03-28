import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { signup } from "./firebase/auth_signup_password";
import { signin } from "./firebase/auth_signin_password";
import { signInPhoneNumber } from "./firebase/auth_phone_signin";
import { signinWithGithub } from './firebase/auth_github_signin_popup';
import Toast from 'react-native-toast-message';
import { GithubAuthProvider } from "firebase/auth";

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [phone, onChangePhone] = React.useState("");

  const CreateAccount = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email == '') {
      console.log(email);
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (password == null || password.length < 5) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Password',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    else {
      signup(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Toast.show({
            type: 'success',
            text1: "User Created",
            visibilityTime: 3000,
            autoHide: true,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          Toast.show({
            type: 'error',
            text1: errorCode + " : " + errorMessage,
            visibilityTime: 3000,
            autoHide: true,
          });
        })
    }
  }

  const ValideAccount = (email, password) => {
    signin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        console.log("signin success")
        Toast.show({
          type: 'info',
          text1: 'Valide Account',
          visibilityTime: 3000,
          autoHide: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Invalid Account',
          visibilityTime: 3000,
          autoHide: true,
        });
      })
  }
  const phoneConnection = (phone) => {
    if (phone == null ) {
      Toast.show({
        type: 'error',
        text1: 'phone Account not found',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      console.log(phone);
      signInPhoneNumber(phone)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          let code = getCodeFromUserInput();
          console.log(code)
          confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            console.log(user)
            Toast.show({
              type: 'info',
              text1: 'Valide Account',
              visibilityTime: 3000,
              autoHide: true,
            });
          }).catch((error) => {
            Toast.show({
              type: 'info',
              text1: error.code + " : " +error.message,
              visibilityTime: 3000,
              autoHide: true,
            });
          });
        }).catch((error) => {
          Toast.show({
            type: 'error',
            text1: error,
            visibilityTime: 3000,
            autoHide: true,
          });
        });
    }
  }

  const githubConnection = () => {
    signinWithGithub().then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user
      console.log("signin success with github");
      console.log(token);
      Toast.show({
        type: 'info',
        text1: 'Github Account',
        visibilityTime: 3000,
        autoHide: true,
      });
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
          Toast.show({
            type: 'error',
            text1: errorCode + " : " + errorMessage,
            visibilityTime: 3000,
            autoHide: true,
          });
  })
  }

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}>
      </TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}>
      </TextInput>
      
      <Text>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
      />
      <div id="reCAPTCHA-widget" />
      <Button title="Signup !" id="signup" onPress={() => CreateAccount(email, password)} />
      <Button title="Phone Sign" id="phone-sign" onPress={() => phoneConnection(phone)} />
      <Button title="Signin !" id="signin" onPress={() => ValideAccount(email, password)} />
      <Button title="Github Signin !" id="github-signin" onPress={() => githubConnection()} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
