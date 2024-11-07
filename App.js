import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';
import Screen03 from './Screens/Screen03';
import Screen04 from './Screens/Screen04';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
        <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }} />
        <Stack.Screen name="Screen04" component={Screen04} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
