import { Box, HStack, Text } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';



const seeAllCard = (props) => {
  
  return (
    
      <HStack justifyContent="space-between" my={3}>
        <Text color="#1AC0CC"  fontSize="md" 
        >{props.service}</Text>
        <AntDesign name="right" size={24} color="#1AC0CC" />
      </HStack>
  
  )
}

export default seeAllCard