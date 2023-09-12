import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabScreen } from "../constant/tabScreen";
import { iconScreenOptions } from "../utils";
import { AccountStack } from "./AccountStack";
import { screen } from "../constant/screenName";

const Tab = createBottomTabNavigator();
//Barra de navegacion inferior
export function AppNavigation() {
  const inicioSesion = true;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#68708a",
        tabBarIcon: ({ color, size }) => iconScreenOptions(route, color, size),
      })}
    >
      {inicioSesion ? (
        <Tab.Screen
          name={screen.account.tab}
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      ) : (
        <>
          {tabScreen.map((screen, index) => (
            <Tab.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))}
        </>
      )}
    </Tab.Navigator>
  );
}
