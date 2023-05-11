import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Avatar,
  Button,
  FAB,
  Menu,
  Surface,
} from "react-native-paper";
import OrderCard from "../components/OrderCard";

const Home = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView className="flex-1 relative bg-gray-100 p-2">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-5xl py-4 ">Orders</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Avatar.Text size={40} label="TS" />
        </TouchableOpacity>
      </View>

      <FAB
        icon="plus"
        label="assign"
        visible={true}
        className="absolute bottom-0 right-0  m-6 z-40"
        onPress={() => console.log("Pressed")}
      />

      <ScrollView>
        <View className="py-2 justify-start flex-row px-2">
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button className="bg-white px-2 mb-4" onPress={openMenu}>Sort by</Button>}
          >
            <Menu.Item onPress={() => {}} title="time" />
            <Menu.Item onPress={() => {}} title="near" />
            <Menu.Item onPress={() => {}} title="products" />
          </Menu>
        </View>

        {new Array(10).fill(" ").map((m,key) => (
            <OrderCard key={key}/>
        ))}
        <View className="h-24">
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
