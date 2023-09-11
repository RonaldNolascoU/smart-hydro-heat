import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../constant/screenName";
import { StaticsScreen } from "../screens/StaticsScreen";

const Stack = createNativeStackNavigator();

export function StaticsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#687089" },
      }}
    >
      <Stack.Screen
        name={screen.statics.statics} //Es el nombre que se va a usar para navegar
        component={StaticsScreen} //Es el componente que se va a renderizar
        options={{ title: "Estadisticas", headerTitleAlign: "center" }} //Es el nombre que aparece en el header
      />
    </Stack.Navigator>
  );
}
