import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { screen } from "../constant/screenName";
import { TemperatureControlScreen } from "../screens/TemperatureControlScreen/TemperatureControlScreen";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#687089" },
      }}
    >
      <Stack.Screen
        name={screen.home.home} // Es el nombre que se va a usar para navegar
        component={HomeScreen} // Es el componente que se va a renderizar
        options={{
          title: "Inicio",
          headerTitleAlign: "center",
        }} // Es el nombre que aparece en el header
      />
      <Stack.Screen
        name={screen.home.temperature}
        component={TemperatureControlScreen}
        options={{
          title: "Control de Temperatura",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
