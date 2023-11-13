import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Card, Text, DataTable, } from "react-native-paper";
import { styles } from './Statistics.style';
import eventService from '../../services/event-service';

export function Statistics() {
    const [saveData, setSaveData] = useState([])

    useEffect(() => {
        showData()
    }, [])

    const showData = async () => {
        try {
            const data = await eventService.getHistory()
            console.log('Datos 1', data);
            console.log('Datos 2', saveData);
            setSaveData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const formatDate = (value) => {
        const date = new Date(value)
        return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: '2-digit' })
    }

    const formatTime = (inicio, fin) => {
        const start = new Date(inicio);
        const end = new Date(fin);
        const different = Math.abs(end - start)

        const hours = Math.floor(different / 3600000)
        const minutes = Math.floor((different % 3600000) / 60000)
        const seconds = Math.floor((different % 60000) / 1000)
        const tiempoFormateado = `${hours}: ${minutes}: ${seconds}`;

        return tiempoFormateado
    }

    return (
        <ScrollView>
            {
                saveData.map((data, index) => (
                    <Card style={styles.cardContainer}>
                        <Card.Content>
                            <Text variant="bodyMedium">Data</Text>
                            <DataTable key={index}>
                                <DataTable.Row>
                                    <DataTable.Cell>Heater State</DataTable.Cell>
                                    <DataTable.Cell>
                                        {data.estado ? (<Text>Activo</Text>) : (<Text>Inactivo</Text>)}
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Temparature</DataTable.Cell>
                                    <DataTable.Cell>{data.temperatura}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Water Amount</DataTable.Cell>
                                    <DataTable.Cell>{data.cantidadAgua} litros</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Start Time</DataTable.Cell>
                                    <DataTable.Cell>{formatDate(data.inicio)}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>End Time</DataTable.Cell>
                                    <DataTable.Cell>{formatDate(data.fin)}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Active Time</DataTable.Cell>
                                    <DataTable.Cell>{formatTime(data.inicio, data.fin)}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Heater ID</DataTable.Cell>
                                    <DataTable.Cell>{data._id}</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </Card.Content>
                    </Card>
                ))
            }
        </ScrollView>


    )
}