import { Box, HStack, Pressable, Text } from 'native-base'
import {React} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Search from './Search';
import { useNavigation } from "@react-navigation/native";

const Top = () => {
const navigation = useNavigation();

  return (
    
    <HStack>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <AntDesign name="arrowleft" size={30} color="#22C5CF" />
      </Pressable> 
        <Box w="80%" ml={6}>
            <Search/>
        </Box>
    </HStack>
  )
}

export default Top