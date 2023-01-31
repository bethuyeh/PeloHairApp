import { Box, HStack, Image, Text, Pressable, Button, ScrollView, Heading } from 'native-base'
import React from 'react'
import { MaterialIcons, FontAwesome, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import Style from '../Components/Style';
import Bottom from '../Components/Bottom';


const SaloonServices = [
  {
    id:"1",
    service: "Braids and Twists",
    image: require("../../assets/Afro-lilgirl.jpg"),
    price: "N6500"
  },

  {
    id:"2",
    service: "Wash and Perm",
    image: require("../../assets/Afro-Smile.jpg"),
    price: "N5500"
  },

  {
    id:"3",
    service: "Wash and Go",
    image: require("../../assets/Afro3.jpg"),
    price: "N6500"
  },

  {
    id:"4",
    service: "Braids and Twists",
    image: require("../../assets/blackgirlafro.jpg"),
    price: "N6500"
  },

  {
    id:"5",
    service: "Weddings and Events",
    image: require("../../assets/Braids2.jpg"),
    price: "N8500"
  },

  {
    id:"6",
    service: "Wigs",
    image: require("../../assets/threefros.jpg"),
    price: "From N6500"
  },

  
]


const SaloonInfo = () => {
  return (
    <Box flex={1} safeAreaTop >
    <HStack justifyContent="space-between">
      <Pressable px={3}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Pressable px={3}><Text bold>See Price List</Text></Pressable>
    </HStack>

        <Image
            style= {Style.image}
            mt={2}
            w="full"
            source={require("../../assets/Afro-Mood.jpg")}
            alt="Logo"
            size="150"
            resizeMode="cover"
        />
       
        <Box px={4}>
            <HStack  mt={2} justifyContent="space-between">
               <Heading size="lg"  color="#148189"   >Kinky Curl</Heading>
               <Box bg="muted.100" borderColor="#EFFEFF" borderWidth="1" borderRadius="50%" p={2} px={2}>
                   <Text fontSize="md" color="#595454">Open</Text>
               </Box>
            </HStack>

            <HStack >
              <MaterialIcons name="location-pin" size={20} color="#1AC0CC" />
              <Text ml={2} fontSize="md" color="#595454">1256 Boulevard Garki 2 </Text>
            </HStack>

            <HStack mt={1} >
            <FontAwesome name="star-half-empty" size={24} color="#d4bf04" />
              <Text ml={2} fontSize="md" color="#595454">4.8 (23 reviews) </Text>
            </HStack>
            {/* RATING DATA */}

        </Box>

      <HStack mt={2} justifyContent="space-evenly" borderBottomWidth="0.5" borderColor="muted.200">
        
        <Pressable alignItems="center">
          <Box bg="muted.100" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={2} px={2}>
              <MaterialCommunityIcons name="web" size={30} color="#1AC0CC" />
          </Box>
          <Text>Website</Text>
        </Pressable>

          <Pressable alignItems="center">
            <Box bg="muted.100" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={2} px={2}>
              <MaterialIcons name="message" size={30} color="#1AC0CC" />
            </Box>
            <Text>Message</Text>
          </Pressable>

        <Pressable alignItems="center">
          <Box bg="muted.100" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={2} px={2}>
          <FontAwesome name="phone-square" size={30} color="#1AC0CC" />
            </Box>
            <Text>Phone</Text>
        </Pressable>  

        <Pressable alignItems="center">
          <Box bg="muted.100" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={2} px={2}>
          <Ionicons name="location" size={30} color="#1AC0CC" />
          </Box>
          <Text>Location</Text>
        </Pressable>  

      <Pressable alignItems="center">
        <Box bg="muted.100" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={2} px={2}>
          <FontAwesome name="share" size={30} color="#1AC0CC" />
        </Box>
        <Text>Share</Text>
      </Pressable>

      </HStack>

      <Box mt={3} px={4} >
        <HStack justifyContent="space-between">
        <Box>
            <Heading size="lg" color="#2c3030">Our Services</Heading>
            
        </Box>

          <Button bgColor="#22C5CF"  p={2} px={2}
            _text= {{
              color:"#2c3030",
              fontWeight: "bold"
            }}
            
          >
            Book Now
          </Button>
        </HStack>

     
          <ScrollView mt={1} horizontal={true}>
          <HStack>
          {
            SaloonServices.map((i) => {
              return (
               
              <Box m={2} justifyContent="space-evenly">
                <Image
                  source={i.image}
                  alt="Logo"
                  w="150"
                  h="150"
                  resizeMode="cover"
                />
                <Box bg="#148189" borderWidth="#787878"  p={2} >
                  <Text fontSize="md" color="#fff">{i.service}</Text>
                  <Text color="#fff" bold>{i.price}</Text>
                </Box>
                </Box>
           
              )
            })
          }
          </HStack>
        </ScrollView>
       
      </Box>
      <Bottom/>
    </Box>
  )
}

export default SaloonInfo