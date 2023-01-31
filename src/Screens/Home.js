import { Box, Text, HStack, Image, Pressable, ScrollView} from 'native-base'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome} from '@expo/vector-icons';
import Style from '../Components/Style';
import Search from '../Components/Search';
import FirstCard from '../Components/FirstCard';



const Home = ({navigation}) => {

  
  return (
    <Box flex={1} w="100%" safeAreaTop px={6} mb={2} mt={3}> 
      <HStack justifyContent='space-between'>
        <Pressable onPress={() => navigation.navigate("signin")}>
          <AntDesign name="arrowleft" size={24} color="#1AC0CC"/>
          </Pressable>
          <Text 
            fontSize="xl"
            color="#1AC0CC"
            bold
            borderColor="black"
          >Good morning Jane</Text>
          <Box bg="muted.200" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={1} px={2}>
          <FontAwesome name="user" size={24} color="#1AC0CC" />
          </Box>
      </HStack>

      {/* Search bar */}
      <Box mb={2}>
        <Search/>
      </Box>

        {/* Image */}
        <Box>
        <ScrollView flexGrow = {1}>
                <Image 
                style= {Style.image}
                mt={4}
                w="full"
                source={require("../../assets/Braids1.jpg")}
                alt="Logo"
                size="150"
                resizeMode="cover"
                />
            
            <HStack justifyContent="flex-end" mt={2}>
              <Text fontSize="md" bold color="" >See all</Text>
              <AntDesign name="arrowright" size={24} color="black" />
              
            </HStack>

            <Box>
                <FirstCard/>
              </Box>

                <Box  mt={10}>
                  <Image 
                  style= {Style.image}
                  w="full"
                  source={require("../../assets/white-braids.jpg")}
                  alt="Logo"
                  size="150"
                  resizeMode="cover"
                  backgroundColor='transparent'/>
                </Box>   
        </ScrollView>
        </Box>
        
    </Box>
  )
}

export default Home