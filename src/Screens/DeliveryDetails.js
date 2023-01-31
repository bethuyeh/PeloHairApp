import {Box, Text, Radio, Group, HStack, Button } from 'native-base'
import {React, useState} from 'react'
import DeliveryData from '../Data/DeliveryData';
import CartData from '../Data/CartData'


const DeliveryDetails = () => {

const Total = i.packagePrice + dev.deliveryFee

const [value, setValue] = useState('one');

  return (
    <Box mt={3}>
        <Box py={3} bg="#b0d5d9" px={3}>
           <Text fontSize="md" bold>Select Delivery Method</Text>
        </Box>

        
        <Radio.Group
           name="myRadioGroup"
           value={value} 
           onChange={(nextValue) => {
           setValue(nextValue);   
           }}>
                {/* <Radio mx={3} mt={3} value="one" my="3">Door Delivery</Radio> */}
                    {
                      DeliveryData.map((i, index) => (
                        {/* <Box w="100%" pb={3} key={index} borderBottomColor="muted.200" borderBottomWidth={0.5}>
                          <Box mx={3} mt={1} bg="muted.100">
                            <Text > Delivered between {i.startTime} and {i.endTime}</Text>
                            <Text fontSize="md" bold color="#148189">Delivery Fee: {i.deliveryFee}</Text>
                          </Box>
                            
                        </Box> */}
                    ))
                  }
  
                <Radio mx={3} mt={3} value="two" my="3">Pickup Station</Radio>
            </Radio.Group>

           {
             DeliveryData.map((dev, index) => (
              <Box>
                <Box w="100%" pb={3} key={index} borderBottomColor="muted.200" borderBottomWidth={0.5}>
                    <Box mx={3} mt={1} bg="muted.100">
                      <Text > Delivered between {dev.startTime} and {dev.endTime}</Text>
                      <Text fontSize="md" bold color="#148189">Station Address: {dev.station}</Text>
                    </Box>    
                </Box>

                  <Box py={3} bg="#b0d5d9" px={3}>
                    <Text fontSize="md" bold>ORDER DETAILS</Text>
                  </Box>

                  {
                    CartData.map((i, index) => (
                      <Box>
                        <Box key={index}px={3}py={2}>
                          <Text color="#787878">NUMBER OF PACKAGE: {i.packageNumber}</Text>
                          <Text color="#787878">{i.packageTimes}   {i.packageName}</Text>
                          <Text color="#787878">Fulfilled by: {i.packageDistributor}</Text>
                        </Box>

                        <Box py={3} bg="#b0d5d9" px={3}>
                          <HStack justifyContent="space-between">
                            <Text fontSize="md" bold>Total</Text>
                            <Text fontSize="md" bold>{i.packagePrice}</Text>
                          </HStack>

                          {/* <HStack justifyContent="space-between">
                            <Text fontSize="md" bold>Delivery Fee</Text>
                            <Text fontSize="md" bold>{dev.deliveryFee}</Text>
                          </HStack> */}

                          {/* <HStack justifyContent="space-between">
                            <Text fontSize="md" bold>Total</Text>
                            <Text fontSize="md" bold>{Total}</Text>
                          </HStack> */}

                        </Box>

                        
                      </Box>
                    ))
                  }
               </Box>            
            ))
        }      

        <Button h="60" px={4}>
          Save
        </Button>  
    </Box>
  )
}

export default DeliveryDetails