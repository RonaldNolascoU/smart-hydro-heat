import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.home} //Es el nombre que se va a usar para navegar
        component={HomeScreen} //Es el componente que se va a renderizar
        options={{ title: "Inicio" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
