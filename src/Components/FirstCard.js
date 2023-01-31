import { Box, Flex, Image, Pressable, Text } from 'native-base'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const FirstCard = () => {
  const navigation = useNavigation();

  return (
  
          <Flex
          flexWrap="wrap" 
          direction="row" 
          justifyContent="normal"
          px={1}
          w='100%'>
            {/* 1 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("saloon")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source = {require("../../assets/shampoo2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Saloons</Text>
              </Pressable>

            {/* 2 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("stylists")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/saloncolored2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Stylists</Text>
              </Pressable>

              {/* 3 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("vendors")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/shoppingcolored2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Vendors</Text>
              </Pressable>

              {/* 4 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("onekservices")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/piggybankcolored2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >1k Services</Text>
              </Pressable>

              {/* 5 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("quiz")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/hairtype2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Hair Quiz</Text>
              </Pressable>

              {/* 6 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("tutorials")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/hairtutorial.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Tutorials</Text>
              </Pressable>

              {/* 7 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("advisory")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/worker.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Advisory</Text>
              </Pressable>

              {/* 8 */}
              <Pressable mt='1' mr="3" onPress={() => navigation.navigate("articles")}>
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="4" px={2}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/newsreport.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Articles</Text>
              </Pressable>
            </Flex>
  )
}

export default FirstCard