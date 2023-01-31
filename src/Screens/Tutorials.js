import { Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import TutorialData from '../Data/TutorialData';
import TutorialCard from '../Components/TutorialCard'
import { AntDesign } from '@expo/vector-icons';
import Bottom from '../Components/Bottom';
import Search from '../Components/Search';
import Top from '../Components/Top';

const Tutorials = () => {
  return (
    <Box flex={1} mb={2}>

<Box pb={4} px={4} safeAreaTop mt={2} borderBottomWidth="0.5" borderColor="muted.200">
    <Top/>
      <Heading mt={4} color="#148189" size="lg" mb={1} textAlign="center">Hair Tutorials</Heading>
    </Box>

    <ScrollView h="80" flexGrow = {1}>
    
      {
        TutorialData.map((i) => {
            return (
              
              
              <Box>
              
                <TutorialCard 
                    key={i.id} 
                    image={i.image} 
                    title={i.title}
                    author={i.author} 
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

export default Tutorials