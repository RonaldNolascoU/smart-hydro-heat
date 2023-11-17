import React from 'react'
import { testAlarms } from '../../constant/testAlarms';
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../constant/screenName";
import { Button, Card, Text, DataTable, IconButton } from 'react-native-paper';
import { styles } from "./Alarms.styles";

export function Alarms() {
    const navigation = useNavigation();

    const goToProgramAlarmsForm = () => {
        navigation.navigate(screen.alarms.programAlarms);
      };
    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewContent}>
                    {testAlarms.map((data,i) => (
                        <View key={i}>
                        <Card style={styles.cardContainer}>
                            <DataTable>
                                <DataTable.Row onPress={() => { console.log("me has presionado " + i) }}>
                                    <DataTable.Cell >{data.hour}</DataTable.Cell>
                                    <DataTable.Cell >|</DataTable.Cell>
                                    <DataTable.Cell style={styles.titleText}>
                                        <Text>{data.title}</Text>
                                        </DataTable.Cell>
                                    <DataTable.Cell><Button onPress={() => { }}>X</Button></DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </Card>
                        </View>
                    ))}
                    <IconButton
                        icon="alarm-plus"
                        size={50}
                        style={styles.bottomButton}
                        onPress={() => {
                            goToProgramAlarmsForm();
                        }}
                    />
                </ScrollView>
            </View>
        </>
    )
}