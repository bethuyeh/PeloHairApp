import { Box, Text, Image, HStack, Pressable } from 'native-base'
import React from 'react'
import Style from '../Components/Style'
import { AntDesign } from '@expo/vector-icons';

const Porousity = () => {
  return (
    <Box safeAreaTop flex={1} px={6} w="100%">

        <HStack mb={2} justifyContent="space-between">
           <Pressable>
                <AntDesign color ="#148189" name="arrowleft" size={24} />
           </Pressable>
            <Text textAlign="center" bold color ="#148189" fontSize="2xl" >Hair Quiz</Text>
            <Box></Box>
        </HStack>

        <Text mt={4} textAlign="center" color ="#787878" fontSize="2xl" >POROUSITY TEST</Text>
        <HStack justifyContent="space-between" mt={4} w="100%">
            <Box alignItems="center" >
             <Image
               w="full"
               source={require("../../assets/glass-cup.png")}
               alt="Logo"
               size="100"
               resizeMode="contain"
             />

             <Image
               style={Style.lowProusity}
               w="full"
               source={require("../../assets/hairStrandRB.png")}
               alt="Logo"
               size="50"
               resizeMode="contain"
             />
             <Text color="#787878" style={Style.lowText}>Low Porousity</Text>
            </Box>

            <Box alignItems="center" >
             <Image
               w="full"
               source={require("../../assets/glass-cup.png")}
               alt="Logo"
               size="100"
               resizeMode="contain"
             />
             <Image
               style={Style.mediumProusity}
               w="full"
               source={require("../../assets/hairStrandRB.png")}
               alt="Logo"
               size="50"
               resizeMode="contain"
             />

            <Text color="#787878" style={Style.mediumText}>Mid Porousity</Text>

            </Box>

            <Box alignItems="center" >
             <Image
               w="full"
               source={require("../../assets/glass-cup.png")}
               alt="Logo"
               size="100"
               resizeMode="contain"
             />
             <Image
               style={Style.highProusity}
               w="full"
               source={require("../../assets/hairStrandRB.png")}
               alt="Logo"
               size="50"
               resizeMode="contain"
             />
             <Text color="#787878">High Porousity</Text>
            </Box>
        </HStack>
      <Text mt={10}  lineHeight={35} color="#787878" textAlign="justify">Begin by combing your hair to remove losing strands, and then 
      drop those strands into your glass of water. 
      "Hair with a low porosity floats. Hair with medium
      porosity will float briefly before progressively sinking. 
      Hair with a high porosity will sink right away.</Text>
    </Box>
  )
}

export default Porousity