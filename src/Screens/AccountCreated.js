import { Center, Heading, Text, Button, Box} from "native-base"
import React from 'react'
import Apploading from "expo-app-loading"
import {useFonts} from 'expo-font'
import { useNavigation } from "@react-navigation/native";


const AccountCreated = () => {
const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Italiana': require('../../assets/Italiana/Italiana-Regular.ttf')
    });

    if (!fontsLoaded){
        return <Apploading/>
    }

  return (
    <Center flex={1} bg="white" >

    <Text
        fontSize='2xl'
        bold
        color="cyan.500"
    >
        Account Created!

       
    </Text>
      <Center w="full">
        <Heading color="cyan.500" alignItems="center" fontFamily="Italiana" fontSize="9xl">HA</Heading>
      
        <Box  w="60%">
            <Button 
              onPress={() => navigation.navigate("Home")}
              _pressed={{
                    bg: 'white'
                }}
              mt='22' 
              bg="primary.500"
              size='lg' 
              rounded={50}>
                Proceed
              </Button>
              </Box>
      </Center>

      
    </Center>
  )
}

export default AccountCreated