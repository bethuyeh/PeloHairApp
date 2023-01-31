import { Box, Text, HStack, Pressable } from 'native-base'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react'
import Style from './Style';


const Bottom = () => {
  return (
    
    <HStack pb={3} pt={4} justifyContent="space-between" px={5} borderTopWidth="0.5" borderColor="muted.200">
                <Pressable alignItems="center" >
                  <AntDesign name="home" size={25} color="#1AC0CC" />
                  <Text
                    textAlign="center"
                    justifyItems="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Home</Text>
                </Pressable>

                <Pressable alignItems="center"> 
                <AntDesign name="book" size={25} color="#1AC0CC" />
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Booking</Text>
                </Pressable>

                <Pressable alignItems="center">
                <FontAwesome name="reorder" size={25} color="#1AC0CC" />
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Account</Text>
                </Pressable>
                </HStack>
                
  )
}

export default Bottom