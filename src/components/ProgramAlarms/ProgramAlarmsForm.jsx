import React from 'react'
import { testAlarms } from '../../constant/testAlarms';
import { View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Card, Text, DataTable, IconButton, TextInput } from 'react-native-paper';
import { styles } from "./ProgramAlarmsForm.styles";

export function ProgramAlarmsForm() {
    return (
        <View>

            <View style={styles.timePicker}>
                <TextInput keyboardType='numeric' placeholder='Hora' mode='outlined' />
                <TextInput keyboardType='numeric' placeholder='Minutos' mode='outlined' />
            </View>
            <View style={styles.form}>

            </View>
            <Card style={styles.cardContainer}>
                <View style={styles.form}>
                    <TextInput placeholder='Titulo de alarma'></TextInput>
                </View>
                <View style={styles.bottomButtons}>
                    <Button mode='contained' onPress={() => { }}>Guardar</Button>
                    <Button mode='contained' onPress={() => { }}>Cancelar</Button>
                </View>
            </Card>
        </View>
    )
}