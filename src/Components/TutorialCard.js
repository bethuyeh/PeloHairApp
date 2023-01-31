import { Box, VStack, HStack, Text, Image, Pressable } from 'native-base'
import React from 'react'
import Style from './Style';

const TutorialCard = (props) => {
  return (
   
        <Pressable  mx={3} pl={4} my={4} style={Style.shadowProp} rounded="20%" borderColor="cyan.500" borderWidth="1"> 
        <HStack py={4}>
      <Image
                 
        source={props.image}
        alt="Logo"
        size="100"
        resizeMode="cover"
        />
            <Box pl={3} w="75%">
            <Text  fontSize="lg" fontWeight="700" color="#1AC0CC">{props.title}</Text>
            <Text mt="2" fontSize="md" bold >By : {props.author}</Text>
            </Box>
        </HStack>
        </Pressable>
        

  )
}

export default TutorialCard