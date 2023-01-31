import {Flex, HStack, Pressable} from 'native-base'
import React from 'react'
import FirstData from '../Data/FirstData'
import FirstCard from './FirstCard'



const FirstHome = () => {
  
  return (
  <Flex
    flexWrap="wrap" 
    direction="row" 
    justifyContent="normal"
    px={1}
    w='100%'>
      {
        FirstData.map((i) => {
          return(
            
              <FirstCard
                image={i.image}
                Text = {i.Text}
                id={i.id}
                key={i}
              />
         
          )
        })        
        }
         </Flex>
      ); 
    
  }

export default FirstHome