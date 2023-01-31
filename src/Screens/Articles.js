import { Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import ArticleData from '../Data/ArticleData';
import { AntDesign } from '@expo/vector-icons';
import Bottom from '../Components/Bottom';
import Search from '../Components/Search';
import Top from '../Components/Top';
import TutorialCard from '../Components/TutorialCard';

const Articles = () => {
  return (
    <Box flex={1} mb={2}>

    <Box pb={4} px={4} safeAreaTop mt={2} borderBottomWidth="0.5" borderColor="muted.200">
    <Top/>
      <Heading mt={4} color="#148189" size="lg" mb={1} textAlign="center">Hair Articles</Heading>
    </Box>

    <ScrollView h="80" flexGrow = {1}>
    
      {
        ArticleData.map((i) => {
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
      </Box>
  )
}

export default Articles