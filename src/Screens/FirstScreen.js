import {Box, Center, Heading, Spinner} from "native-base"
import React from 'react'
import Apploading from "expo-app-loading"
import {useFonts} from 'expo-font'
import Colors from '../Color'

const FirstScreen = () => {

    const [fontsLoaded] = useFonts({
        'Italiana': require('../../assets/Italiana/Italiana-Regular.ttf')
    });

    if (!fontsLoaded){
        return <Apploading/>
    }

  return (
    <Center flex={1} bg="cyan.500" >
      <Center>
        <Heading color="white" alignItems="center" fontFamily="Italiana" fontSize="9xl">HA</Heading>
      </Center>

      <Spinner pt={4} size="lg" color="white" />
    </Center>
  )
}

export default FirstScreen