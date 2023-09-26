import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabScreen } from '../constant/tabScreen';
import { iconScreenOptions } from '../utils';
import { AccountStack } from './AccountStack';
import { screen } from '../constant/screenName';

const Tab = createBottomTabNavigator();
// Barra de navegacion inferior
export function AppNavigation() {
  const inicioSesion = false;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#68708a',
        tabBarIcon: ({ color, size }) => iconScreenOptions(route, color, size),
      })}
    >
      {inicioSesion ? (
        <Tab.Screen
          name={screen.account.tab}
          component={AccountStack}
          options={{ title: 'Cuenta' }}
        />
      ) : (
        <>
          {tabScreen.map((scr, index) => (
            <Tab.Screen
              key={`tab-${index}`}
              name={scr.name}
              component={scr.component}
              options={scr.options}
            />
          ))}
        </>
      )}
    </Tab.Navigator>
  );
}
