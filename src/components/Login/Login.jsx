import React from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Login.styles';
import { screen } from '../../constant/screenName';

export function Login() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate(screen.home.home);
  };
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Sign in to your account</Text>
      <TextInput style={styles.textbox} mode="flat" placeholder="Email*" />
      <TextInput style={styles.textbox} placeholder="Password*" secureTextEntry />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          goToRegister();
        }}
      >
        Sign in
      </Button>
      <Text style={styles.text}>
        Don't you have an account yet? <Button onPress={goToRegister()}>Sign in</Button>
      </Text>
    </View>
  );
}
