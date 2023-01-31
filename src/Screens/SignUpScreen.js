import { Box, Heading, Center, Form, FormControl, Input, Button, Text,  Pressable } from 'native-base'
import React, {useState} from 'react'



const SignUpScreen = ({navigation}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password:"",
    confirmpassword:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)

}

  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <Form space={3} mt="5">

        <FormControl>          
            <FormControl.Label>Name</FormControl.Label>
            <Input type="text" value={user.name} onChange={(e) => setUser({...user, name:e.target.value})}/>
        
          {/* // onChange​={(e) => setFormData({...formData, title: e.target.value})} */}
                
            <FormControl.Label>Email</FormControl.Label>
            <Input type="text" value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
         
        
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
        
        
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" value={user.confirmpassword} onChange={(e) => setUser({...user, confirmpassword:e.target.value})}/>
          
          <Button 
              // onPress={() => navigation.navigate("bottom")}
              type="submit"
              onSubmit={handleSubmit}
              mt="2" 
              bg="cyan.500"   
              _text={{
                    color: "white",
                    fontWeight: '600'
                  }}>
            Sign up
          </Button>
          
        </FormControl>       
        </Form>

        <Pressable onPress={() => navigation.navigate("signin")}>
              
                <Text >
                  Back to <Text color= "indigo.500">Sign in</Text>
                </Text>
              </Pressable>
      </Box>
    </Center>;
};

export default SignUpScreen;