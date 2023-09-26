import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '../constant/screenName';
import { AccountScreen } from '../screens/Account/RegisterScreen/AccountScreen';
import { LoginScreen } from '../screens/Account/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/Account/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#687089' },
      }}
    >
      <Stack.Screen
        name={screen.account.login} // Es el nombre que se va a usar para navegar
        component={LoginScreen} // Es el componente que se va a renderizar
        options={{ title: 'Iniciar sesión', headerTitleAlign: 'center' }} // Es el nombre que aparece en el header
      />
      <Stack.Screen
        name={screen.account.register} // Es el nombre que se va a usar para navegar
        component={RegisterScreen} // Es el componente que se va a renderizar
        options={{ title: 'Registro', headerTitleAlign: 'center' }} // Es el nombre que aparece en el header
      />
      {/* <Stack.Screen
        name={screen.account.account} // Es el nombre que se va a usar para navegar
        component={AccountScreen} // Es el componente que se va a renderizar
        options={{ title: 'Cuenta', headerTitleAlign: 'center' }} // Es el nombre que aparece en el header
      /> */}
    </Stack.Navigator>
  );
}
