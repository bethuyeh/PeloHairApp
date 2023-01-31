import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import Search from '../Components/Search'
import { AntDesign } from '@expo/vector-icons';
import seeall from '../Data/seeAll';
import SeeAllCard from '../Components/SeeAllCard';
import Bottom from '../Components/Bottom';


const SeeAll = () => {

 
  return (
    <Box flex={1} px={4}>
    <Box  safeArea >
    <AntDesign name="arrowleft" size={24} color="#1AC0CC" />
      <Search mt='4'/>

        <Box mt='4'>
            {
                seeall.map((i) => {
                  return (
                    <SeeAllCard service={i.service}/>
                  );})
                }        
      </Box>
      
    </Box>
    <Bottom safeAreaBottom/>
    </Box>
  )
}

export default SeeAll