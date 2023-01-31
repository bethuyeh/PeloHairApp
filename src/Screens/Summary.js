import { Box, Text, HStack } from 'native-base'
import React from 'react'
import DeliveryData from '../Data/DeliveryData'
import CartData from '../Data/CartData'

const Summary = () => {

// const Total = i.packagePrice + dev.deliveryFee
  return (
    <Box flex={1} safeAreaTop>
      <Box bg="#b0d5d9">
        <Text fontSize="md" bold px={3}>Your Order</Text>
      </Box>

        
        {
             DeliveryData.map((dev, index) => (
              <Box key={index}>

                  {
                    CartData.map((i, outdex) => (
                      <Box mt={2} key={outdex}>

                        <Box py={3}  px={3} borderBottomColor="muted.300" borderBottomWidth={0.5}>
                          <HStack justifyContent="space-between">
                            <Text bold>Total</Text>
                            <Text bold>{i.packagePrice}</Text>
                          </HStack>

                          {/* <HStack justifyContent="space-between">
                            <Text bold>Delivery Fee</Text>
                            <Text bold>{dev.deliveryFee}</Text>
                          </HStack> */}
                        </Box>

                        {/* <Box px={3} bg="#b0d5d9">
                          <HStack justifyContent="space-between">
                            <Text bold>Total</Text>
                            <Text bold></Text>
                          </HStack>
                        </Box> */}
                      </Box>
                    ))
                  }

                  <Box>
                   {/* <HStack  justifyContent="space-between" bg="#b0d5d9">
                    <Text fontSize="md">Your Address</Text>
                    <Text fontSize="md" bold color="#148189">Change</Text>
                   </HStack>  */}

                    <Text>{dev.name}</Text>
                    <Text>{dev.address}</Text>
                    <Text>{dev.number}</Text>
                  </Box>

                  <Box>
                  {/* <HStack  justifyContent="space-between" bg="#b0d5d9">
                    <Text fontSize="md">Delivery Method</Text>
                    <Text fontSize="md" bold color="#148189">Change</Text>
                   </HStack> */}

                    <Text>{dev.deliveryStatus}</Text>
                    <Text>Delivered between {dev.startTime} and {dev.endTime}</Text>
                    <Text>{dev.address}</Text>
                    <Text>{dev.number}</Text>
                  </Box>
               </Box>            
            ))
        }

        <Button h="60" mx={3} mt="3" bold mb={4}
            _text={{
              fontWeight: "bold"
            }}
            onPress={() => navigation.navigate("paystack")}
            >
            Confirm
        </Button>

    </Box>



  )
}

export default Summary