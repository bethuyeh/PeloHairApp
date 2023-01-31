import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import UserData from '../Data/UserData'
import {  MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <>
    {
        UserData.map((i, index) => (
        <Box key={index} >
          <Box bg="#000" PY={3}>
            <Text bold>Account</Text>
            <Text color="#1AC0CC" bold>Welcome {i.name}</Text>
            <Text>{i.email}</Text>
          </Box>

            <Box bg="muted.200">
                <Text>My HA Account</Text>
            </Box>
          
            <VStack>
              <HStack justifyContent="flex-start">
                    <MaterialIcons name="storefront" size={24} color="black" />
                <Text>Orders</Text>
              </HStack>

              <HStack justifyContent="flex-start">
                    <MaterialIcons name="business-center" size={24} color="black" />
                <Text>Vouchers</Text>
              </HStack>
 
            <Box bg="b0d5d9" py={3}>
                <Text bold>Settings</Text>

                <Pressable>
                <HStack justifyContent="flex-start">
                    <MaterialCommunityIcons name="account-box-outline" size={24} color="black" />
                    <Text>Account Management</Text>
                  </HStack>
                </Pressable>
            </Box>
              
            </VStack>
         
        </Box>
        ))
    }
    </> 
  )
}

export default Profile