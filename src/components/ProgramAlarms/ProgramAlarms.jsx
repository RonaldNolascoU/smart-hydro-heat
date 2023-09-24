import React from 'react'
import { testAlarms } from '../../constant/testAlarms';
import { ProgramAlarmsForm } from './ProgramAlarmsForm';
import { View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Card, Text, DataTable, IconButton } from 'react-native-paper';
import { styles } from "./ProgramAlarms.styles";

export function ProgramAlarms() {
    
    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewContent}>
                    {testAlarms.map((data) => (
                        <Card style={styles.cardContainer}>
                            <DataTable>
                                <DataTable.Row onPress={() => { console.log("me has presionado " + [data.id]) }}>
                                    <DataTable.Cell >{data.hour}</DataTable.Cell>
                                    <DataTable.Cell >|</DataTable.Cell>
                                    <DataTable.Cell style={styles.titleText}>
                                        <Text>{data.title}</Text>
                                        </DataTable.Cell>
                                    <DataTable.Cell><Button onPress={() => { }}>X</Button></DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </Card>
                    ))}
                    <IconButton
                        icon="alarm-plus"
                        size={50}
                        style={styles.bottomButton}
                        onPress={() => {console.log("Redireccion a ProgramAlarmsForm.jsx")}}
                    />
                </ScrollView>
            </View>
        </>
    )
}