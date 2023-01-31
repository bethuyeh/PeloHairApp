import { Box, HStack, Text, Image, ScrollView, Button } from 'native-base'
import {React, useState} from 'react'
import Style from '../Components/Style'
import VendorsItem from '../Data/VendorsItem'
import { FontAwesome } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import Bottom from '../Components/Bottom'

const ViewCart = () => {
    const [value, setValue] = useState(0);

  return (
    <Box flex={1}>
    <ScrollView  >

        <Box bg="#ebe9e6" safeAreaTop py={2}>
            <Text opacity="1" px={3}>CART SUMMARY</Text>
        </Box>

        <HStack bg="#8cedea" py={1} px={3} justifyContent="space-between">
            <Text fontSize="md" bold>Subtotal</Text>
            <Text fontSize="md" bold>N33000</Text>
        </HStack>
        <Box bg="#ebe9e6" >
            <Text px={3}>Delivery fees not included</Text>
        </Box>
        <Box bg="#ebe9e6" mt={2} >
            <Text px={3} bold>Cart (5)</Text>
        </Box>
      
        <>
        {
            VendorsItem.map((i) => {
                return(
                <Box px={3}  borderColor="cyan.100" mt={2} borderWidth="1" w="full" py={3} style={Style.shadowProp}>
                  <HStack key={i.id} mb={3} >
                    <Image
                       
                        w="full"
                        source={i.image}
                        alt="Logo"
                        size="150"
                        resizeMode="cover"
                    />

                    <Box m={2}>
                        <Text bold>{i.name}</Text>
                        <Text>Seller: {i.seller}</Text>
                        <Text fontSize="md" bold>{i.price}</Text>
                        <Text>{i.stockstatus}</Text>
                    </Box>
                  </HStack>

                <HStack justifyContent="space-between">
                  <HStack>
                    <FontAwesome name="trash" size={24} color="black" />
                    <Text fontSize="md" pl="1">REMOVE</Text>
                 </HStack>

                  <Box>
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
            </HStack> 

            </Box>
                )
            })
        }
        
        </>    
    </ScrollView>
  
      <Box bg="#fff" h="60" px={3}>
        <Button mt={2}  borderTopWidth="0.5" borderColor="muted.200" mb={3}
        onPress={() => navigation.navigate("payment")}
        >
            Checkout
        </Button>
      </Box>
    </Box>
  )
}

export default ViewCart
