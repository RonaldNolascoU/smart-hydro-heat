import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { StaticsScreen } from "../screens/StaticsScreen";

const Stack = createNativeStackNavigator();

export function StaticsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.statics.statics} //Es el nombre que se va a usar para navegar
        component={StaticsScreen} //Es el componente que se va a renderizar
        options={{ title: "Estadisticas" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
