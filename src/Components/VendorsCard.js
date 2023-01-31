import { Pressable, ScrollView, Text, Image, Box } from 'native-base'
import React from 'react'
import Style from './Style'


const VendorsCard = (props) => {
 

  return (

    <>

                
                <Box mx={3} style={Style.shadowProp} pb="3">
                    <Image             
                     source={props.image}
                     alt="Logo"
                     size="125"    
                     resizeMode="cover" 
                    />
                    <Text fontSize="md" bold textAlign="center" 
                        color="#148189"
                    >{props.category}</Text>
                </Box>
         
    

            
    </>
  )
}

export default VendorsCard