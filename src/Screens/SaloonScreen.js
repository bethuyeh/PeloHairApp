import { Box, ScrollView, Heading, Button } from 'native-base'
import React from 'react'
import SaloonData from '../Data/SaloonData'
import SaloonCard from '../Components/SaloonCard'
import Top from '../Components/Top'
import { useNavigation } from "@react-navigation/native";
 

const SaloonScreen = () => {

  const navigation = useNavigation();
  return (
   
    <Box flex={1} mb={2}>

    <Box pb={4} px={4} safeAreaTop mt={2} borderBottomWidth="0.5" borderColor="muted.200">

      <Top/>
      <Heading mt={4} color="#148189" size="lg" mb={1} textAlign="center">Saloon</Heading>
    </Box>

    <ScrollView h="80" flexGrow = {1}>

      {
        SaloonData.map((i) => {
            return (
              
              
              <Box>
              
                <SaloonCard 
                    key={i.id} 
                    image={i.image} 
                    name={i.name} 
                    location={i.location}
                    distance={i.distance}
                    rating={i.rating}
                    />
                   
                </Box>      
                    
            
            )
        })
      }

      </ScrollView>
      <Button onPress={() => navigation.navigate("map")}>View Distance Location</Button>
      </Box>
  )
}

export default SaloonScreen