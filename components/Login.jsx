import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text,TextInput,Button,Menu,OpenURLButton } from "react-native-paper";

const Login = () => {
    return (
        <>
            <Text  variant="displayMedium">Sign in to your account</Text>
            <TextInput style={styles.textbox} mode='flat' placeholder='Email*'></TextInput>
            <TextInput style={styles.textbox}placeholder='Password*' secureTextEntry={true} ></TextInput>
            <Button style={styles.button} mode="contained" onPress={()=>{}}>Sign in</Button>
            <Text style={styles.text}>Don't you have an account yet? Sign in</Text>
        </>
    )
}


export default Login;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        top:'100%'
    },
    textbox:{
        width:'90%',
        marginTop:'3%'
    },
    button:{
        marginTop: '10%',
        width:'85%'
    },
    text:{
        marginTop:'5%',
        textAlign:'left'
    }
  });
