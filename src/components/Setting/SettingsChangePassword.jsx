import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button, IconButton } from "react-native-paper";
import { styles } from './SettingsChangePassword.styles';

export function SettingsChangePassword() {
    // Estados para mostrar la contraseña que escriba el usurio
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)

    // Función para habilitar la visibilidad del input de Nueva Contraseña
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    // Función para habilitar la visibilidad del input de Repetir Nueva Contraseña
    const toggleRepeatPasswordVisibility = () => {
        setIsRepeatPasswordVisible(!isRepeatPasswordVisible);
    };

    return (
        <>
            <View style={styles.contenedorText}>
                <View style={styles.contenedorInputs}>
                    <TextInput style={styles.textInput} mode='flat' secureTextEntry={!isPasswordVisible} placeholder='New Password' />
                    <TextInput style={styles.textInput} mode='flat' secureTextEntry={!isRepeatPasswordVisible} placeholder='Repeat New Password' />
                </View>
                <View style={styles.contenedorIcon}>
                    <IconButton style={styles.iconoNuevaContra} icon={isPasswordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />
                    <IconButton icon={isRepeatPasswordVisible ? 'eye-off' : 'eye'} onPress={toggleRepeatPasswordVisibility} />
                </View>
            </View>
            <View style={styles.contenedorButton}>
                <Button style={styles.buttonPassword} mode="contained">Change Password</Button>
            </View>
        </>
    )
}