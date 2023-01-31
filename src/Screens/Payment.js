import { Image, ScrollView } from 'native-base';
import { Box, Text, Radio, HStack, Input, Button} from 'native-base'
import {React, useState} from 'react'
import DeliveryData from '../Data/DeliveryData';
import CartData from '../Data/CartData';

const Payment = () => {

const [value, setValue] = useState('one');
  return (
    <Box safeAreaTop flex={1}>
    <ScrollView vertical={true}>
      <Box bg="#b0d5d9" px={4} py={2}>
        <Text fontSize="md" bold>Select Payment Method</Text>
      </Box>

      <Box mt={3}>
      <Radio.Group
        px={4}
        name="myRadioGroup"
        value={value}
        onChange={(nextValue) => {
        setValue(nextValue);
        }}
        >
      <Radio value="one" my="1">Pay With Cards</Radio>
        <HStack >
          <Image
            mt={1}
            w="full"
            source={require("../../assets/masterCardRB.png")}
            alt="Logo"
            size="100"
            resizeMode="cover"
          />

          <Image
            mt={1}
            w="full"
            source={require("../../assets/VisaLogoRB.png")}
            alt="Logo"
            size="100"
            resizeMode="cover"
          />

          <Image
            mt={1}
            w="full"
            source={require("../../assets/verveCardRB.png")}
            alt="Logo"
            size="100"
            resizeMode="cover"
          />
        </HStack>

        <Box py={1} px={3}>
           <Text color="#787878" py={2}>
             Kindly note that you'll be 
             directed to Paystack to complete your transaction
           </Text>

           <Text color="#787878" py={2}>
             Ensure your payment information is 
             up to date and that you have the necessary funds
           </Text>

          <Text color="#787878" py={2}>
            Enjoy 5% off purchases for first time purchases!
          </Text>
        </Box>
        
      <Radio value="two" my="1" mt={3}>Pay on Delivery</Radio>
    </Radio.Group>
    </Box>

    <Box px={4} bg="#b0d5d9" mt={3} >
      <Text fontSize="md" bold py={2}>Use a Voucher</Text>
    </Box>

    <Box py={4} px={3}>
      <Input
        variant="underlined"
        placeholder="Voucher Code"
        placeholderTextColor="#787878"
        w="100%"
        fontSize="md"
        py={2}
        type="text"
        color="#1AC0CC"
        borderBottomColor="#787878"
      />
    </Box>

    <Box px={3}>
      <Text fontSize="md" color="#148189" textAlign="center" bold>Apply Code</Text>
    </Box>

  
    {
             DeliveryData.map((dev, index) => (
              <Box key={index}>

                  {
                    CartData.map((i, index) => (
                      <Box mt={2} key={index}>

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
                            <Text fontSize="md" bold></Text>
                          </HStack> */}
                        </Box>
                      </Box>
                    ))
                  }
               </Box>            
            ))
        }

        <Button h="60" mx={3} mt="3" bold mb={4}
            _text={{
              fontWeight: "bold"
            }}
            onPress={() => navigation.navigate("summary")}
            >
            Proceed to Summary
        </Button>
</ScrollView>
    </Box>
  )
}

export default Payment