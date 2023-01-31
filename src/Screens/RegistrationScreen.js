import { Box, HStack,Button ,Text, VStack, Checkbox, Input, Pressable, ScrollView, FormControl, Select, Item } from 'native-base'
import {React, useState} from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';


const RegistrationScreen = () => {

  const [service, setService] = useState("");

  return (
    <Box safeAreaTop flex={1}>
      <HStack justifyContent="space-between" px="4">
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text fontSize="md" bold>Add Address</Text>

        <Pressable>
        <FontAwesome name="times" size={24} color="black" />
        </Pressable>

      </HStack>
        <HStack mt="6" p="4" justifyContent="space-between" bg="muted.200">
          <Text>Buyer Details</Text>
          <Text>* Required</Text>
        </HStack>
      
      <ScrollView vertical={true}  >
      <VStack mt="4" py={3} space={12} px={4}>

        <FormControl>
            <Input
              mt={3}
              py={3}
              variant="underlined"
              placeholder="First Name *"
              w="100%"
              fontSize="md"
              placeholderTextColor="#787878"
              borderBottomColor="#1AC0CC"
            />
       
        

       
            <Input
              mt={6}
              fontSize="md"
              placeholderTextColor="#787878"
              variant="underlined"
              placeholder="Last Name *"
              w="100%"
              borderBottomColor="#1AC0CC"
            />
       
{/* 
        
            <Input
              mt={3}
              fontSize="md"
              placeholderTextColor="#787878"
              variant="underlined"
              placeholder="Delivery Address *"
              w="100%"
              borderBottomColor="#1AC0CC"
            /> */}
      
      <Box mt={6}>
      <Select 
        
        borderColor="#1AC0CC"
        selectedValue={service} 
        minWidth="200" 
        h="50"
        color="#1AC0CC"
        accessibilityLabel="Select City *" 
        placeholder="Select City *" 
        borderWidth={1}
          _selectedItem={{
              endIcon: <AntDesign name="check" size={24} color="black" />
              }} 
            onValueChange={itemValue => setService(itemValue)}>

          <Select.Item label="FCT" value="ABJ" />
          <Select.Item label="Niger" value="NG" />
        </Select>
      </Box>

      {/* <Box mt={4}>
        <Select 
        borderColor="#1AC0CC"
        selectedValue={service} 
        minWidth="200" 
        h="50"
        accessibilityLabel="Select Region *" 
        placeholder="Select City *" 
        borderWidth={1}
          _selectedItem={{
              endIcon: <AntDesign name="check" size={24} color="black" />
              }} 
        mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Wuse" value="ABJ" />
          <Select.Item label="Apo" value="NG" />
          <Select.Item label="Gwarinpa" value="NG" />
          <Select.Item label="Lugbe" value="NG" />
          <Select.Item label="Garki" value="NG" />
        </Select>
        </Box> */}
       
            <Input
              mt={6}
              fontSize="md"
              placeholderTextColor="#787878"
              variant="underlined"
              placeholder="Mobile Number *"
              w="100%"
              color="#000"
              borderBottomColor="#1AC0CC"
            />

        {/* <Input
          mt={3}
          fontSize="md"
          placeholderTextColor="#787878"
          variant="underlined"
          placeholder="Delivery Address *"
          w="100%"
          color="#000"
          borderBottomColor="#1AC0CC"
        /> */}

    <Box mt={6}>
    <Checkbox>
      Default Address
    </Checkbox>
    </Box>    
        <Button h="60" mt={6}>
            Save
        </Button>

        </FormControl>

        

        

        
      </VStack>
      </ScrollView>
    </Box>
  )
}

export default RegistrationScreen