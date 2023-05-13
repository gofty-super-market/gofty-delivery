import Home from './src/screens/Home';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import { Provider } from 'react-native-paper';
import Order from './src/screens/Order';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
          <Stack.Screen options={{headerShown: false}} name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}