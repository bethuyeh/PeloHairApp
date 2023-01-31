
import {Box, Image, Text, Flex, Link} from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';



const WelcomeScreen = () => {
  return (
    <Box flex={1} h='full'>
     
      <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/Cover.jpg")}
            />

          <Box
            w="full"
            h="full"
            position="absolute"
            px="6"
            py="12"
            justifyContent="flex-end"
            
          >

            <Text  fontSize='3xl' color="white">
                Welcome to
            </Text>
            <Text 
               
              color="cyan.500" 
              bold fontSize="6xl" 
              outlineColor="black">
              Hair App
            </Text>
            <Text fontSize='3xl' color="white">
                Your go to for everything your hair ever needed
            </Text>
            
            <Flex direction="row" position="relative" alignItems="flex-end" pt={4} textAlign="end">
            <Text 
              fontSize='sm' 
              color="white"
              px={0}
              >
                <Link
                  _text={{
                  color: "white",
                  fontSize: 'sm',
                  px:'0'
              
              
                  
                  }}>
                
                Continue
                </Link>
            </Text>
            <AntDesign        
              name="right" 
              size={20} 
              color="white"
              px={0}                 
              />

          
            
            </Flex>
          </Box>
            
    </Box>
  )
}

export default WelcomeScreen