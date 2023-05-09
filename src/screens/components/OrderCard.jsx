import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, Checkbox } from 'react-native-paper'

const OrderCard = () => {
    const [checked,setChecked]=useState(false)
  return (
          <Card className="p-2 pl-3 bg-white m-1">
            <TouchableOpacity>

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
                <Checkbox.Item onPress={()=>setChecked(p=>!p)} status={checked?"checked":"unchecked"} className="p-1" />
                <Text className=" text-right">30/54 50:23</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Card>
  )
}

export default OrderCard