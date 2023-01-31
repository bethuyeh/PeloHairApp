import { Box, ScrollView, Heading, HStack, Text, Image, Pressable } from 'native-base'
import React from 'react'
import ProductsData from '../Data/ProductsData'
import Top from '../Components/Top'
import Bottom from '../Components/Bottom'
import VendorsCard from '../Components/VendorsCard'
import Style from '../Components/Style'


const VendorsScreen = ({navigation}) => {
  return (

    <Box mt={6} px={3} flex={1} mb={2} >
      <Box>
        <Top/>
        <Heading mt={4} color="#148189" size="lg" mb={1} textAlign="center">Vendors</Heading>
      </Box>

      <Box mx={2} bg="muted.200"  borderTopColor="#787878">
        <Text px={2} fontSize="md" bold  color="#148189">Categories</Text>
      </Box>

      <Box style={Style.vendorsImage}>
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <Box>
      <HStack mt={1}>
        {
          ProductsData.map((i) => {
            return (
              <Pressable onPress={() => navigation.navigate("viewcart", product)}>
                <VendorsCard 
                  key={i.id} 
                  image={i.image}
                  category={i.category} 
                  voucher={i.voucher}
                  />  
                </Pressable>      
            )}
          )}
         </HStack>
       </Box>
     </ScrollView>
     </Box>

      <Box  bg="muted.200"  borderTopColor="#787878">
        <Text px={2} fontSize="lg" bold  color="#787878">Promos</Text>
      </Box>

      
      <ScrollView mt={2} vertical={true}>
        <Pressable>
          <Image
            source={require("../../assets/Flyer2.png")}
            alt="Logo"
            size="205"
            resizeMode="cover"
            style={Style.image}
          />
        </Pressable>

        <Pressable mt={8}>
          <Image
            source={require("../../assets/VoucherPic1.png")}
            alt="Logo"
            size="205"
            resizeMode="cover"
            style={Style.image}
          />
        </Pressable>

        <Pressable mt={6}>
          <Image
            source={require("../../assets/Discount.png")}
            alt="Logo"
            size="205"
            resizeMode="cover"
            style={Style.image}
          />
        </Pressable>
      </ScrollView>


    </Box>
  )
}

export default VendorsScreen