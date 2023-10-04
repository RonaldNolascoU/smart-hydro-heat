import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "./Register.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../constant/screenName";

export function Register() {
     const navigation = useNavigation();

     const goToHome = () => {
          navigation.navigate(screen.home.home);
     };

     const goToLogin = () => {
          navigation.navigate(screen.account.login);
     }

     return (
          <>
               <View style={styles.container}>
                    <Text variant="displayMedium">Create an account</Text>
                    <TextInput
                         keyboardType="email-address"
                         style={styles.textbox}
                         mode="flat"
                         placeholder="Email*"
                    />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Heater ID"
                         secureTextEntry={true}
                    />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Password*"
                         secureTextEntry={true}
                    />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Repeat password*"
                         secureTextEntry={true}
                    />
                    <Button
                         style={styles.button}
                         mode="contained"
                         onPress={() => {
                              goToHome();
                         }}
                    >
                         Sign up
                    </Button>
                    <View style={styles.linkContainer}>
                         <Text style={styles.text}>Already have an account?</Text>
                         <Button onPress={goToLogin} style={styles.linkBtn}>Sign in</Button>
                    </View>
               </View>
          </>
     );
}
