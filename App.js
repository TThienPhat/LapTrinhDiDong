import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';
import Screen03 from './Screens/Screen03';
import Screen04 from './Screens/Screen04';
import Screen05 from './Screens/Screen05';
import Screen06 from './Screens/Screen06';
import '@expo/metro-runtime';
import { registerRootComponent } from 'expo';

const Stack = createStackNavigator();

registerRootComponent(App);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
        <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }} />
        <Stack.Screen name="Screen04" component={Screen04} options={{ headerShown: false }} />
        <Stack.Screen name="Screen05" component={Screen05} options={{ headerShown: false }} />
        <Stack.Screen name="Screen06" component={Screen06} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
