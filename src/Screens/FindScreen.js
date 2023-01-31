
import {Box, Image, Text, Button, VStack} from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';



const FindScreen = () => {
  return (
    <VStack flex={1} h='full'>
     
      <Image
               flex={0.5}
                
                alt="Logo"
                resizeMode="cover"
                size="2xl"
                w="full"
                source={require("../../assets/findImage.jpg")}
            />

          <Box
            w="full"
            h="full"
            position="absolute"
            px={8} 
            mt={24}
            
            justifyContent="center"
            
          >

            <Text 
               
              color="muted.500" 
              bold fontSize="3xl" 
              mt={24}
              mb={0}
              outlineColor="black">
              Find Stylists, 
              Hair Professionals, etc at your disposal
            </Text>
            
            <Box pt={8}>
            <Button 
              _pressed={{
                    bg: 'white'
                }}
              mt='22' 
              bg="primary.500"
              size='lg' 
              rounded={50}>
                Next
              </Button>
              </Box>
          </Box>
            
    </VStack>
  )
}

export default FindScreen