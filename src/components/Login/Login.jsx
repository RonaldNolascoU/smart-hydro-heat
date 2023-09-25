import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { styles } from "./Login.styles";
import { screen } from "../../constant/screenName";

export function Login() {
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      GoogleSignin.configure();

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log({userInfo})
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

  const goToHome = () => {
    navigation.navigate(screen.home.home);
  };

  return (
    <View style={styles.container}>
        <Text variant="displayMedium">Sign in to your account</Text>
        <TextInput
          style={styles.textbox}
          mode="flat"
          placeholder="Email*"
         />
        <TextInput
          style={styles.textbox}
          placeholder="Password*"
          secureTextEntry
         />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            signIn();
          }}
        >
          Sign in
        </Button>
        <Text style={styles.text}>Don't you have an account yet? Sign in</Text>
      </View>
  );
}
