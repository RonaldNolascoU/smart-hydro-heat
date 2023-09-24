import React from 'react'
import { View } from 'react-native';
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from './Login.styles';

export function Login() {
    return (
        <View style={styles.container}>
                <Text variant="displayMedium">Sign in to your account</Text>
                <TextInput style={styles.textbox} mode='flat' placeholder='Email*' />
                <TextInput style={styles.textbox} placeholder='Password*' secureTextEntry  />
                <Button style={styles.button} mode="contained" onPress={() => { }}>Sign in</Button>
                <Text style={styles.text}>Don&apos;t you have an account yet? Sign in</Text>
            </View>
    )
}
