import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { Icon } from "react-native-elements";
import { HomeStack } from "./HomeStack";
import { StaticsStack } from "./StaticsStack";
import { AlarmsStack } from "./AlarmsStack";
import { NotificationsStack } from "./NotificationsStack";
import { SettingsStack } from "./SettingsStack";
import { AccountStack } from "./AccountStack";

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
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
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
          <Tab.Screen
            name={screen.home.tab}
            component={HomeStack} // Stack de paginas que mostrara el tab
            options={{ title: "Inicio" }} // Nombre que aparece en el tab del menu
          />
          <Tab.Screen
            name={screen.statics.tab}
            component={StaticsStack}
            options={{ title: "Estadisticas" }}
          />
          <Tab.Screen
            name={screen.alarms.tab}
            component={AlarmsStack}
            options={{ title: "Programar" }}
          />
          <Tab.Screen
            name={screen.notifications.tab}
            component={NotificationsStack}
            options={{ title: "Notificaciones" }}
          />
          <Tab.Screen
            name={screen.settings.tab}
            component={SettingsStack}
            options={{ title: "Configuraciones" }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.home.tab) {
    iconName = "home";
  }
  if (route.name === screen.statics.tab) {
    iconName = "chart-bar";
  }
  if (route.name === screen.alarms.tab) {
    iconName = "alarm";
  }
  if (route.name === screen.notifications.tab) {
    iconName = "bell";
  }
  if (route.name === screen.settings.tab) {
    iconName = "cog";
  }
  if (route.name === screen.account.tab) {
    iconName = "account";
  }

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
