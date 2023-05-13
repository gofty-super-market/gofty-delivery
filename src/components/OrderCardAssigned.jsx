import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Card } from 'react-native-paper'

const OrderCardAssigned = () => {
  const [visible, setVisible] = React.useState(false);

  return (
        <>
          <Card className="p-2 pl-3 bg-gray-50 m-1 border-[#66339955] border">
            <TouchableOpacity>

            <View className="flex-row">
              <View className="flex-1 items-start">
                <View className="flex-row items-center">
                  <Text className="text-2xl">#40 </Text>
                  <Text className="py-1 px-2 rounded-full bg-gray-200">new</Text>
                </View>
                <Text>name of client | 0689978685 </Text>
                <Text>marrakech sidimousa harakat</Text>
                  <Text className="px-1 mt-1 rounded-md bg-[#66339922]">
                    8 items
                  </Text>
              </View>

              <View className="items-end justify-between ">
                

                <Text className=" text-right">30/54 50:23</Text>
              <Button onPress={()=>setVisible(p=>!p)} className="bg-gray-200">{visible? "done":"Change State" }</Button>


              </View>
            </View>
            </TouchableOpacity>
          {
            visible &&
            <View className="rounded-xl border border-[#3332] mt-2 bg-gray-100  overflow-hidden">
          <ScrollView horizontal >
            <Button className="bg-[#66339966] text-[#fff] m-1">new</Button>
            <Button className="bg-[#66339911] m-1">in progress</Button>
            <Button className="bg-[#66339911] m-1">delivered</Button>
            <Button className="bg-[#66339911] m-1">new</Button>
            <Button className="bg-[#66339911] m-1">in progress</Button>
            <Button className="bg-[#66339911] m-1">delivered</Button>
          </ScrollView>
            </View>
          }
          </Card>
          </>
  )
}

export default OrderCardAssigned