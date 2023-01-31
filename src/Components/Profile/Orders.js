import React from 'react'
import { Box, Button, Pressable, Text } from 'native-base'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator ={false}>
      {/* PAID */}
        <Pressable>
            <HStack 
                space={4} 
                justifyContent="space-between" 
                alignItems="center" 
                bg={Colors.deepGray} 
                py={5}
                px={2}
                > 
            <Text fontSize={9} colr={Colors.blue} isTruncated>
                129540569098
            </Text>
            <Text fontSize={12} bold colr={Colors.black} isTruncated>
                PAID
            </Text>
            </HStack>
            <Text fontSize={11} italic colr={Colors.black} isTruncated>
                Jan 23 2022
            </Text>
            <Button 
            px={7} 
            py={1.5} 
            rounded={50} 
            bg={Colors.main} 
            _text={{
                color:Colors.white
                }}
                
            _pressed={{
                bg:Colors.main
            }}
            >
                $400
            </Button>
        </Pressable>

        {/* UNPAID */}
        <Pressable>
            <HStack 
                space={4} 
                justifyContent="space-between" 
                alignItems="center"  
                py={5}
                px={2}
                > 
            <Text fontSize={9} colr={Colors.blue} isTruncated>
                129540569098
            </Text>
            <Text fontSize={12} bold colr={Colors.black} isTruncated>
                NOT PAID
            </Text>
            </HStack>
            <Text fontSize={11} italic colr={Colors.black} isTruncated>
                Jan 23 2022
            </Text>
            <Button 
            px={7} 
            py={1.5} 
            rounded={50} 
            bg={Colors.red} 
            _text={{
                color:Colors.white
                }}
                
            _pressed={{
                bg:Colors.red
            }}
            >
                $400
            </Button>
        </Pressable>
    </ScrollView>
    </Box>
  )
}

export default Orders