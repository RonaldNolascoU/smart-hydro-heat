import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../constant/screenName";
import { AlarmsScreen } from "../screens/AlarmsScreen";

const Stack = createNativeStackNavigator();

export function AlarmsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#687089" },
      }}
    >
      <Stack.Screen
        name={screen.alarms.alarms} //Es el nombre que se va a usar para navegar
        component={AlarmsScreen} //Es el componente que se va a renderizar
        options={{ title: "Programar", headerTitleAlign: "center" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
