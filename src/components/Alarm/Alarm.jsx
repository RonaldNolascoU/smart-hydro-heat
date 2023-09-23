import React from "react";
import { View } from "react-native";
import { Text, Card, IconButton, Button } from "react-native-paper";
import { styles } from "./Alarm.styles";

export function Alarm() {
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
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="plus"
            mode="outlined"
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={styles.btnContentActions}>
          <Button
            mode="contained"
            style={styles.btnActions}
            onPress={() => console.log("Pressed")}
          >
            Cambiar
          </Button>
          <Button
            mode="contained"
            style={styles.btnActions}
            onPress={() => console.log("Pressed")}
          >
            Encender/Apagar
          </Button>
        </View>
      </View>
    </View>
  );
}
