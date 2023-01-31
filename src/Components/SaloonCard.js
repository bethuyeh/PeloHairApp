import { Box, Pressable, HStack, Text, Image } from 'native-base'
import React from 'react'

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Style from './Style';

const SaloonCard = (props) => {
  return (
   
        <Pressable safeAreaTop px={4} py={3} > 
        <HStack rounded="20%" borderColor="cyan.500" borderWidth="1" w="full" py={3} px={4} style={Style.shadowProp}>
      <Image
        p={3} 
        mt={1}                
        source={props.image}
        alt="Logo"
        size="100"
        resizeMode="cover"
        />
        
        <Box pl={3} py={2}>
            <Text fontSize="md" fontWeight="600" color="#1AC0CC">{props.name}</Text>
            
  
            
          <HStack mt={1}>
          <MaterialIcons name="location-pin" size={20} color="#1AC0CC" />
            <Text>{props.distance}</Text>
          </HStack>
            
          <HStack justifyContent="space-between" w="70%">
            <Text color="#000" >{props.location}</Text>
              <HStack >
                  <Text color="#000" >{props.rating}</Text>
                  <FontAwesome name="star-half-empty" size={20} color="#bdba19" />
              </HStack>
          </HStack>

          
        </Box>
        </HStack>
        </Pressable>
        

  )
}

export default SaloonCard