import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { AlarmsScreen } from "../screens/AlarmsScreen";

const Stack = createNativeStackNavigator();

export function AlarmsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.alarms.alarms} //Es el nombre que se va a usar para navegar
        component={AlarmsScreen} //Es el componente que se va a renderizar
        options={{ title: "Programar" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
