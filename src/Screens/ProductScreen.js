import {Box, Button, Center, Heading, HStack, Image, Pressable, Select, Text } from 'native-base'
import {React, useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Style from '../Components/Style';
import Rating from '../Components/Rating';
import NumericInput from 'react-native-numeric-input';


const ProductScreen = (props) => {

  const [value, setValue] = useState(0);

  return (
    <Box safeAreaTop flex={1} >
      <Box px={3}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Box>   
          <Image
            style= {Style.image}
            mt={4}
            w="full"
            source={require("../../assets/Wigs/Black-Long.jpg")}
            alt="Logo"
            size="200"
            resizeMode="cover"
            borderBottomLeftRadius="24%"
          />
          
        

     <Box px={3}>

     <Pressable>
        <Rating value={4}/>
      </Pressable>

        <HStack mt={4} justifyContent="space-between">
          <Heading color="#148189">Water Weaves</Heading>
          <Heading>N28,000</Heading>
        </HStack>

        <Box mt={6}>
          <Text  fontSize="lg" bold >Colors</Text>
          <HStack w="35%" justifyContent="space-between" >
          
              <Pressable bg="#000" size="8" rounded='full' alignItems="center" 
                   justifyContent="center"> 
                    <AntDesign name="check" size={18} color="white" alignItem="center" />
              </Pressable>

              <Pressable bg="#542003" size="8" rounded='full' alignItems="center" 
                   justifyContent="center">  
                  <AntDesign name="check" size={18} color="white" alignItem="center" /> 
              </Pressable>

              <Pressable bg="#D4BFBF" size="8" rounded='full' alignItems="center" 
                   justifyContent="center">   
                  <AntDesign name="check" size={18} color="white" alignItem="center" />
              </Pressable>
          </HStack>
        </Box>

        <Box mt={6}>
          <NumericInput
            borderColor="#148189"
            value={value}
            totalWidth={140} 
            totalHeight={40}
            // maxValue={product.countInStock}
            minValue={0}
            rightButtonBackgroundColor="#8cedea"
            leftButtonBackgroundColor="#8cedea"
           

          />
        </Box>

        <Text mt={6} lineHeight={24} fontSize={12}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Est fuga natus alias quam, doloribus velit dolores soluta 
            ipsum neque dolorum harum nulla nobis sit iste mollitia, quidem non, ullam ipsam?
       </Text>

        <Box mt={10} justifyItems="center">
        <Button
          bg="#148189"
          rounded="14%"
          _text={{
            textAlign: "center"
          }}
        >Add to Cart</Button>


        </Box>
        {/* the box for the screen padding */}
      </Box>
    </Box>
  )
}

export default ProductScreen