import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Text, Button, DataTable, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Home.styles';
import { screen } from '../../constant/screenName';

const bannerImage = require('../../../assets/images/banner-home1.png');

function LeftContent() {
  return <Avatar.Icon size={22} icon="lightbulb-on-outline" />;
}

export function Home() {
  const navigation = useNavigation();

  const goToTemperatureControl = () => {
    navigation.navigate(screen.home.temperature);
  };

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <Card style={styles.cardContainer}>
        <Card.Cover style={styles.cardImage} source={bannerImage} />
        <Card.Content>
          <Text variant="bodyMedium">State</Text>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Heater State</DataTable.Cell>
              <DataTable.Cell>Off</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Temparature</DataTable.Cell>
              <DataTable.Cell>0°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Current Time</DataTable.Cell>
              <DataTable.Cell>0s</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Heater ID</DataTable.Cell>
              <DataTable.Cell>088567-0</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </Card.Content>
      </Card>

      <View style={styles.bottomContainer}>
        <Button
          style={styles.bottomButton}
          mode="contained"
          onPress={() => {
            goToTemperatureControl();
          }}
        >
          Manage Heater
        </Button>
      </View>

      <View>
        <Card style={styles.cardMessages}>
          <Card.Title title="Day Message" left={LeftContent} />
          <Card.Content>
            <Text variant="bodySmall">Some advice about how to save water</Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
