import { Box, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ScrollView } from 'native-base'
import ButtonNew from '../ButtonNew'

const Input = [
  {
    label: "USERNAME",
    type: "text",

  },

  {
    label: "EMAIL",
    type: "text",

  },

  {
    label: "NEW PASSWORD",
    type: "PASSWORD",

  },

  {
    label: "CONFIRM PASSWORD",
    type: "PASSWORD",

  }

]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i, index) => (
              <FormControl key={index}>
            <FormControl.Label 
              _text={{
              fontSize: '12px',
              fontWeight: 'bold',
                          
            }}
            >
            {i.label}
            </FormControl.Label>
            <Input 
              borderColor= {Colors.main}
              borderWidth= {0.5} 
              bg={Colors.subGreen} 
              py={4} 
              type={i.type}
              color={Colors.main} 
              fontSize={20}
              _focus={{
                bg: Colors.subGreen,
                borderColor: Colors.main, 
                borderWidth:1             
                          }}
            />

          </FormControl>
            ))
          }
          <ButtonNew bg={Colors.main} color={Colors.white}>
            UPDATE PRPOFILE
          </ButtonNew>

          </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile