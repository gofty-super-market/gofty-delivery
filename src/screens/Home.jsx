import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  FAB,
  Menu,
  TouchableRipple,
} from "react-native-paper";

const Home = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView className="flex-1 relative bg-gray-100 p-2">
      <Text className="text-5xl py-4 px-2">Orders</Text>

        <FAB
          icon="plus"
          label="assign"
          className="absolute bottom-0 right-0 bg-green-400 m-6 z-40"
          onPress={() => console.log("Pressed")}
        />

      <ScrollView>
        <View className="py-2 justify-start flex-row px-2">
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Sort by</Button>}
          >
            <Menu.Item onPress={() => {}} title="time" />
            <Menu.Item onPress={() => {}} title="near" />
            <Menu.Item onPress={() => {}} title="products" />
          </Menu>
        </View>

        {new Array(10).fill(" ").map(() => (
          <Card className="p-2 pl-3 bg-white m-1">
            <View className="flex-row">
              <View className="flex-1 items-start">
                <Text className="text-2xl">#40 </Text>
                <Text>name of client | 0689978685 </Text>
                <Text>marrakech sidimousa harakat</Text>
                <Text className="px-1 mt-1 rounded-md bg-green-100">
                  8 items
                </Text>
              </View>

              <View className="items-end justify-between ">
                <Checkbox.Item status="checked" className="p-0" />
                <Text className=" text-right">30/54 50:23</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })

export default Home;
