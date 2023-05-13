import { View, Text, ScrollView, TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';

const Order = () => {
  return (
    <SafeAreaView className="px-2">
        <ScrollView>
            <Text className="text-3xl px-2 pt-8">Order</Text>
            <Text className="text-6xl px-2 pt-2">#120</Text>
            <Card className="p-2 bg-white m-1 items-start flex-col">
                <Text className="text-xl">name of the client</Text>
                <Text className="text-base">the address of the client here </Text>
                <Text className="text-xl">0689978614</Text>
                <TouchableOpacity className="bg-[#663399] w-32 flex-row rounded-xl px-4 py-2 my-2 ">
                    <Text className="text-xl text-white mr-2">call now</Text>
                    <Ionicons name="call" color={"white"} size={22}></Ionicons>
                </TouchableOpacity>
            </Card>
            <View>
                <Text className="text-3xl px-2 pt-8">Products</Text>
                <Card className="p-2 bg-white m-1 flex-row ">
                    <Image className="w-20 h-20 " style={{objectFit:"contain"}} source={{uri:"https://ayshadashboard.com/uploads/images/product_image/230212113244-6138394.jpg"}}></Image>
                    <View>
                        <Text className=" px-2 pt-8">Products</Text>
                    </View>
                </Card>
            </View>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default Order