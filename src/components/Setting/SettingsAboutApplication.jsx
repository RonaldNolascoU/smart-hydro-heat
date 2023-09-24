import React from 'react'
import { View, Image } from 'react-native'
import { Text } from 'react-native-paper';
import { styles } from './SettingsAboutApplication.styles';

const appLogo = require('../../../assets/images/logo1-app.png');

export function SettingsAboutApplication() {
    return (
        <View>
            <View style={styles.contenedorImage}>
                <Image source={appLogo} />
            </View>
            <View style={styles.contenedorDescripcion}>
                <Text style={styles.textDescripcion} variant="bodyLarge">
                    SmartHydroHeat App es una aplicación móvil que en conjunto con un calentador de agua
                    inteligente tiene por objetivo optimizar el consumo de energía al calentar agua, analizar y
                    mostrar datos relevantes que serán consumidos por la aplicación hecha en React Native y
                    utilizando una base de datos en firebase para ofrecer una experiencia de baño más
                    consciente y sustentable de manera eficiente.
                </Text>
            </View>
        </View>
    )
}