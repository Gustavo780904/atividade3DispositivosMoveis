import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './components/Produtos';
import Detalhes from './components/Detalhes';
import Sacola from './components/Sacola';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Produtos} options={{ title: 'Loja de luminárias' }} />
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes'}}/>
        <Stack.Screen name="Sacola" component={Sacola} options={{ title: 'Continuar comprando' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

