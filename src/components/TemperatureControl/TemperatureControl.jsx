import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Card, IconButton, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './TemperatureControl.styles';
import eventService from '../../services/event-service';
import { setEventState } from '../../store/generalReducer';

export function TemperatureControl() {
  const { eventState } = useSelector(({ state }) => state);
  console.log(eventState);
  const dispatch = useDispatch();

  const handleOnOff = async () => {
    let data = {
      estado: null,
      inicio: null,
      fin: null,
      temperatura: null,
      cantidadAgua: null,
    };
    if (eventState) {
      data = {
        ...data,
        estado: false,
        fin: new Date(),
        temperatura: null,
        cantidadAgua: null,
      };
    }
    if (!eventState) {
      data = {
        ...data,
        estado: true,
        inicio: new Date(),
      };
    }
    try {
      const response = !eventState
        ? await eventService.encender(data)
        : await eventService.apagar(data);
      Toast.show({
        type: 'success',
        text1: `Success`,
        text2: !eventState
          ? 'El sistema esta encendido correctamente'
          : 'El sistema se apago correctamente',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Error`,
        text2: error?.message || 'Something went wrong',
      });
    }
    dispatch(setEventState(!eventState));
  };

  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>Seleccione la temperatura que desea</Text>
        <Card mode="outlined" style={styles.card}>
          <Card.Content style={styles.cardContainer}>
            <Text style={styles.textCard}>00 °C</Text>
          </Card.Content>
        </Card>
        <View style={styles.btnContainer}>
          <IconButton
            icon="minus"
            mode="outlined"
            size={40}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="plus"
            mode="outlined"
            size={40}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.btnContentActions}>
          <Button mode="contained" style={styles.btnActions} onPress={() => console.log('Pressed')}>
            Cambiar
          </Button>
          <Button mode="contained" style={styles.btnActions} onPress={handleOnOff}>
            {eventState ? 'Apagar' : 'Encender'}
          </Button>
        </View>
      </View>
    </View>
  );
}
