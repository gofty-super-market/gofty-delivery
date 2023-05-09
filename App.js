import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Provider } from 'react-native-paper';
import Home from './src/screens/Home';


export default function App() {
  return (
    <Provider>
      <Home/>
    </Provider>
  );
}