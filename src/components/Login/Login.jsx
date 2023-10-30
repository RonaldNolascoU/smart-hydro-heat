import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { styles } from "./Login.styles";
import { screen } from "../../constant/screenName";
import { saveLoggedin } from '../../store/generalReducer';
import authService from "../../services/auth-service";


export function Login() {
     const navigation = useNavigation();
     const dispatch = useDispatch();
     const [form, setForm] = useState({
       email: "",
       password: "",
     });

  const signIn = async () => {
    try {
      GoogleSignin.configure();

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log({userInfo})
      const { user: { name = "" } = {} } = userInfo || {};
      Toast.show({
        type: 'success',
        text1: `Welcome ${name}`,
      })
      goToHome();
      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const onEmailAndPasswordLogin = async () => {
    try {
      console.log({form})
      const response = await authService.login(form);
      console.log({response})
    } catch (error) {
      console.log({error})
      Toast.show({
        type: 'error',
        text1: `Error`,
        text2: error?.message || 'Something went wrong',
      })
    }
  }

  const goToHome = () => {
    dispatch(saveLoggedin(true));
    navigation.navigate(screen.home.tab, { screen: screen.home.home });
  };

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  }

  return (
    <View style={styles.container}>
        <Text variant="displayMedium">Sign in to your account</Text>
        <TextInput
          style={styles.textbox}
          mode="flat"
          placeholder="Email*"
          onChangeText={(text) => setForm({ ...form, email: text?.toLowerCase() })}
         />
        <TextInput
          style={styles.textbox}
          placeholder="Password*"
          secureTextEntry
          mode="flat"
          onChangeText={(text) => setForm({ ...form, password: text })}
         />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            onEmailAndPasswordLogin()
          }}
        >
          Sign in
        </Button>
        <Text>or</Text>
        <GoogleSigninButton
          style={styles.googleButton}
          color={GoogleSigninButton.Color.Dark}
          size={GoogleSigninButton.Size.Wide}
          onPress={signIn} 
        />
          <View style={styles.linkContainer}>
            <Text style={styles.text}>Don&apos;t you have an account yet?</Text>
            <Button onPress={goToRegister} style={styles.linkBtn}>Sign up</Button>
          </View>
      </View>
  );
}
