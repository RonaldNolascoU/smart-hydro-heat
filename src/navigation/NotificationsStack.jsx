import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { View, Text } from "react-native";
import { screen } from "../utils";
import { NotificationsScreen } from "../screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

export function NotificationsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#687089" },
      }}
    >
      <Stack.Screen
        name={screen.notifications.notifications}
        component={NotificationsScreen}
        options={{ title: "Notificaciones", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
