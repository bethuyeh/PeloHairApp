import { Box, Input, Image, FormControl, Button, Select, Link, ScrollView, Text} from 'native-base'
import {React, useState} from 'react'
import Style from '../Components/Style';
import { AntDesign } from '@expo/vector-icons';

const Quiz = () => {

const [service, setService] = useState("");
  return (
    <Box flex={1} mb={5} safeAreaTop px={3}>
    <Text textAlign="center" bold color ="#148189" fontSize="2xl" mb={2}>Hair Quiz</Text>
    
    <ScrollView vertical={true} flexGrow >
      <Image
        mt={4}
        style= {Style.image}
        w="full"
        source={require("../../assets/Afro-Smile.jpg")}
        alt="Logo"
        size="200"
        resizeMode="cover"
      />

      <Text mt={3} fontSize="lg" color="#787878">Let's get to know your hair a little better so we can recommend the necessary services your way!</Text>
      <FormControl>
      <Input
        mt={6}
        fontSize="md"
        placeholderTextColor="#787878"
        variant="underlined"
        placeholder="How long have you kept your hair?"
        w="100%"
        borderBottomColor="#1AC0CC"
      />
       
      <Input
        mt={6}
        fontSize="md"
        placeholderTextColor="#787878"
        variant="underlined"
        placeholder="What is your most concerning hair challenge?"
        w="100%"
        borderBottomColor="#1AC0CC"
      />

      <Input
        mt={6}
        fontSize="md"
        placeholderTextColor="#787878"
        variant="underlined"
        placeholder="How often do you deep condition your hair?"
        w="100%"
        borderBottomColor="#1AC0CC"
      />
    
      

    <Box mt={4}>
        <Select 
          borderColor="#1AC0CC"
          selectedValue={service}
          fontSize="md" 
          minWidth="200" 
          h="50"
          color="#1AC0CC"
          accessibilityLabel="Select City *" 
          placeholder="Select Hair Type *" 
          borderWidth={1}
          _selectedItem={{
              endIcon: <AntDesign name="check" size={24} color="black" />
              }} 
            onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Relaxed Hair" value="RH" />
          <Select.Item label="Natural Hair" value="RH" />

          <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
            }} href="#">
              <Select.Item label="Natural Hair" value="NH" />
            </Link>
          
        </Select>

      <Box mt={4}>
        <Select 
          borderColor="#1AC0CC"
          selectedValue={service} 
          minWidth="200" 
          fontSize="md"
          h="50"
          color="#1AC0CC" 
          accessibilityLabel="Select Hair" 
          placeholder="If natural, what's your natural hair type?" 
          _selectedItem={{
          endIcon: <AntDesign name="check" size={24} color="black" />
          }} 
          mt={1} onValueChange={itemValue => setService(itemValue)}>        

          <Select.Item label="3A" value="RH" />
          <Select.Item label="3B" value="RH" />
          <Select.Item label="3C" value="RH" />
          <Select.Item label="4A" value="RH" />
          <Select.Item label="4B" value="RH" />
          <Select.Item label="4C" value="RH" /> 
        </Select>
      </Box>  

      <Box mt={6}>
        <Image
          style= {Style.image}
          w="full"
          source={require("../../assets/NaturalHairType2RB.png")}
          alt="Logo"
          size="200"
          resizeMode="cotain"
        />
      </Box>

      <Box mt={2}>
        <Select 
          borderColor="#1AC0CC"
          selectedValue={service} 
          minWidth="200" 
          fontSize="md"
          h="50"
          color="#1AC0CC" 
          accessibilityLabel="Select Hair" 
          placeholder="What's your natural hair porousity?" 
          _selectedItem={{
          endIcon: <AntDesign name="check" size={24} color="black" />
          }} 
          mt={1} onValueChange={itemValue => setService(itemValue)}
          >        

          <Select.Item label="Low porousity" value="LowPorousity" />
          <Select.Item label="Medium porousity" value="MediumPorousity" />
          <Select.Item label="High Porousity" value="HighPorousity" />
        </Select>
      </Box>

      <Box mt={4}>
        <Text fontSize="lg">
          Don't know your hair porousity type? Take this easy 
          <Link isExternal _text={{
            fontSize: "lg",   
            color: "#FE0707"
            }}  _web={{
            mb: -2
            }}
            href="#hairporousity"
        > test
        
        </Link> to find out!
        </Text>
      </Box>
      </Box>
    </FormControl>

    <Box>
        <Button mt={6} h="60"  w="100%">Submit</Button>   
    </Box>

    </ScrollView>
    </Box>
  )
}

export default Quiz