import { Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import ProfessionalData from '../Data/ProfessionalData'
import SaloonCard from '../Components/SaloonCard'
import Top from '../Components/Top'
import Bottom from '../Components/Bottom'

const Proffesional = () => {
  return (
   
    <Box flex={1} mb={2}>

    <Box pb={4} px={4} safeAreaTop mt={2} borderBottomWidth="0.5" borderColor="muted.200">

      <Top/>
      <Heading mt={4} color="#148189" size="lg" mb={1} textAlign="center">Meet Professionals</Heading>
    </Box>

    <ScrollView h="80" flexGrow = {1}>

      {
        ProfessionalData.map((i) => {
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
      <Bottom />
      </Box>
  )
}

export default Proffesional