import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Provider } from 'react-native-paper';


export default function App() {
  return (
    <Provider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>start new work
        <Badge className>hello world</Badge>
        </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}