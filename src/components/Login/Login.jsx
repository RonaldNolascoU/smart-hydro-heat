import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "./Login.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../constant/screenName";

export function Login() {
     const navigation = useNavigation();

     const goToHome = () => {
          navigation.navigate(screen.home.home);
     };

     const goToRegister = () => {
          navigation.navigate(screen.account.register);
     }

     return (
          <>
               <View style={styles.container}>
                    <Text variant="displayMedium">Sign in to your account</Text>
                    <TextInput
                         style={styles.textbox}
                         mode="flat"
                         placeholder="Email*"
                    ></TextInput>
                    <TextInput
                         style={styles.textbox}
                         placeholder="Password*"
                         secureTextEntry={true}
                    ></TextInput>
                    <Button
                         style={styles.button}
                         mode="contained"
                         onPress={() => {
                              goToHome();
                         }}
                    >
                         Sign in
                    </Button>
                    <View style={styles.linkContainer}>
                         <Text style={styles.text}>Don't you have an account yet?</Text>
                         <Button onPress={goToRegister} style={styles.linkBtn}>Sign up</Button>
                    </View>
               </View>
          </>
     );
}
