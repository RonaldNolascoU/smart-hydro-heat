import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { screen } from "../constant/screenName";
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
