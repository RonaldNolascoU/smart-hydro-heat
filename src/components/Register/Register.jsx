import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { styles } from './Register.styles';
import { screen } from '../../constant/screenName';
import authService from '../../services/auth-service';

export function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const navigation = useNavigation();

  const handleRegistration = async () => {
    const { name, email, password, repeatPassword } = form;
    if (password !== repeatPassword) {
      Toast.show({
        type: 'error',
        text1: `Error`,
        text2: 'Passwords do not match',
      });
      return;
    }
    try {
      const data = { name, email, password };
      const response = await authService.register(data);
      Toast.show({
        type: 'success',
        text1: `Success`,
        text2: 'Account created successfully',
      });
      if (response) {
        goToLogin();
      }
      // goToLogin();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Error`,
        text2: error?.message || 'Something went wrong',
      });
    }
  };

  const goToHome = () => {
    navigation.navigate(screen.home.home);
  };

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text variant="displayMedium">Create an account</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.textbox}
          mode="flat"
          placeholder="Email*"
          onChangeText={(text) => setForm({ ...form, email: text?.toLowerCase() })}
        />
        <TextInput
          style={styles.textbox}
          placeholder="Name"
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={styles.textbox}
          placeholder="Password*"
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
        />
        <TextInput
          style={styles.textbox}
          placeholder="Repeat password*"
          onChangeText={(text) => setForm({ ...form, repeatPassword: text })}
          secureTextEntry
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            handleRegistration();
          }}
        >
          Sign up
        </Button>
        <View style={styles.linkContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <Button onPress={goToLogin} style={styles.linkBtn}>
            Sign in
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
