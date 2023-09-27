import React from 'react'
import { testAlarms } from '../../constant/testAlarms';
import { View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Card, Text, DataTable, IconButton, TextInput } from 'react-native-paper';
import { styles } from "./ProgramAlarmsForm.styles";
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';


export function ProgramAlarmsForm() {

    const [timePicker,setTimePicker]=useState(false);
    const [time,setTime]=useState(new Date());
    const [text,setText]=useState("00:00");

    const showTimePicker = ()=>{
        setTimePicker(true)
    }

    const onTimeSelect = (event,selectedTime)=>{
        setTimePicker(false);
        const currentTime = selectedTime || time;       

        let tempTime = new Date(currentTime);

        setText(tempTime.getHours()+":"+tempTime.getMinutes());
        setTime(tempTime);
    }
    

    //Es posible utilizar un timePicker pero se instala como paquete aparte, por motivos de diseño
    //los represento como 2 campos numéricos
    return (
        <View>

            <View>
                {timePicker && (
                    <RNDateTimePicker
                    mode='time'
                    display='compact'
                    value={time}
                    onChange={onTimeSelect} />
                )}                       
            <Card onPress={showTimePicker}>
                <Text style={styles.timePicker}>{text}</Text>
            </Card>
                
            </View>
            <View style={styles.form}>

            </View>
            <Card style={styles.cardContainer}>
                <View style={styles.form}>
                    <TextInput placeholder='Titulo de alarma'></TextInput>
                </View>
                <View style={styles.bottomButtons}>
                    <Button mode='contained' onPress={()=>{}}>Guardar</Button>
                    <Button mode='contained' onPress={()=>{}}>Cancelar</Button>
                </View>
            </Card>
        </View>
    )
}