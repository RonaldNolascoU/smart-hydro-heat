import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { StaticsScreen } from "../screens/StaticsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.settings.settings} //Es el nombre que se va a usar para navegar
        component={SettingsScreen} //Es el componente que se va a renderizar
        options={{ title: "Configuraciones" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
