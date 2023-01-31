import { Box, Heading, Center, Text, VStack, FormControl, Input, Button, HStack, Link, Pressable } from 'native-base'
import React from 'react'

const SignInScreen = ({ navigation }) => {
    return <Center w="100%">
        <Box 
          
          safeArea 
          p="2" 
          py="8" 
          w="90%" 
          maxW="290">

          <Heading 
            size="lg" 
            fontWeight="600" 
            color="coolGray.800" 
            _dark={{
              color: "warmGray.50"
            }}>
            Welcome
          </Heading>

          <Heading 
            mt="1" 
            _dark={{
            color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label isRequired>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label isRequired>Password</FormControl.Label>
              <Input type="password" />
              <Pressable 
              onPress={() => navigation.navigate("signup")}
             alignSelf="flex-end" mt="1">
              <Text fontSize= "xs"
              fontWeight= "500"
              color= "indigo.500">
                Forgot Password?
                </Text>
              </Pressable>
            </FormControl>
            <Button mt="2" bg="cyan.500" onPress={() => navigation.navigate("bottom")}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                New User?{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("signup")}>
              <Text 
              color= "indigo.500"
              fontWeight= "medium"
              fontSize= "sm"
            >
                Sign Up
              </Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };

export default SignInScreen;