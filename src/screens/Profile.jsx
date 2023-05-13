import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-paper'
import OrderCardAssigned from '../components/OrderCardAssigned'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
  const [deliveredOrders,setDeliveredOrders]=useState(false)
  return (
    <SafeAreaView className="flex-1 relative bg-gray-100 py-2">
        <ScrollView className="px-2">
        <View className="items-center px-1 py-8 flex-row">
            <Avatar.Text size={80} label="TS" />
            <View className="ml-4">
            <Text className="text-gray-700 text-2xl">tchi sama</Text>
            <Text className="text-gray-400 text-xl">#150</Text>
            </View>
        </View>
            <View>

            <Text className="text-xl py-2 pt-4 px-2" >Assigned Orders</Text>
            <View className="h-4"></View>
            <OrderCardAssigned/>
            <OrderCardAssigned/>
            <TouchableOpacity onPress={()=>setDeliveredOrders(p=>!p)} className="flex-row p-2 gap-1 items-center">
              <Text className="text-xl " >Delivered Orders </Text>
              {
                deliveredOrders?
                  <Ionicons size={20} name="chevron-down-outline"></Ionicons>:
                  <Ionicons size={20} name="chevron-forward-outline"></Ionicons>
              }
            </TouchableOpacity>
            {
              deliveredOrders &&
              <>
                <View className="h-4"></View>
                <OrderCardAssigned/>
                <OrderCardAssigned/>
                <OrderCardAssigned/>
              </>
            }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile