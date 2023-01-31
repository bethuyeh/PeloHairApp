import { Box, Text, ScrollView, Pressable, Flex, Image, HStack, Button } from 'native-base'
import {React, useState} from 'react'
import VendorsItem from '../Data/VendorsItem'
import Style from '../Components/Style'
import Top from '../Components/Top'
import Bottom from '../Components/Bottom'
import { FontAwesome } from '@expo/vector-icons';
import Rating from '../Components/Rating'
import NumericInput from 'react-native-numeric-input'

const SingleCard = ({route}) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  return (
  
    <Box flex={1}  mb={2}> 
   <HStack pb={4} px={6} safeAreaTop mt={2} borderBottomWidth="0.5" 
      borderColor="muted.200" alignItems="center">
      <Top/>
      <Pressable>
      <FontAwesome name="shopping-cart" size={30} color="#1AC0CC" />
      <Box 
            px={1}
            rounded="full"
            position="absolute"
            top={-9}
            left={2}
            bg="red.500"
            _text={{
              color:"#FFF", 
              fontSize:'11px',
              fontWeight: "bold"
              
          }}
          >
            5
          </Box>
          </Pressable>

    </HStack>


      <ScrollView px={6}>
        <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between" 
            >
            {
              VendorsItem.map((i) => {
                
                return (
                <Box w="45%"
                   
                >
                  <Image
                    p={3} 
                    mt={5}                
                    source={product.i.image}
                    alt="Logo"
                    size="170"
                    resizeMode="cover"
                  />

                <Box style={Style.shadowProp} borderWidth="#787878"  p={2} >
                  <Text fontSize="md" color="#000">{product.i.service}</Text>
                  <Text color="#000" bold>{product.i.price}</Text>
                  <HStack justifyContent="space-between">
                      <Text color="#000" >{i.description}</Text>
                  </HStack>
                  <HStack>
                      <Text color="#000" fontSize="md"><Rating value={4}/></Text>
                      <Text>({product.i.rating})</Text>
                  </HStack>
             
                </Box>
                <Button bg="#1AC0CC" onPress={() => navigation.navigate("viewcart")}>
                    Add to Cart
                  </Button>
                  
                  <Box w="100%">
                  <NumericInput
                    borderColor="#1AC0CC"
                    value={value}
                    totalWidth={165}
                    totalHeight={40}
                    // maxValue={product.countInStock}
                    minValue={0}
                    rightButtonBackgroundColor="#1AC0CC"
                    leftButtonBackgroundColor="#1AC0CC"
                    w="100%"
                  />
                </Box>
                </Box>
                )
              })
            }

            </Flex>
      </ScrollView>
      <Bottom/>
      </Box>
  )
}

export default SingleCard