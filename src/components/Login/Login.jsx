import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Login.styles';
import { screen } from '../../constant/screenName';
import { saveLoggedin } from '../../store/generalReducer';

export function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loggedin } = useSelector(({ state }) => state);

  const goToHome = () => {
    dispatch(saveLoggedin(true));

    // navigation.navigate(screen.home.home);
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
          goToHome();
        }}
      >
        Sign in
      </Button>
      <Text style={styles.text}>Don't you have an account yet? Sign in</Text>
    </View>
  );
}
