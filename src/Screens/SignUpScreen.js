import React, {useState} from 'react'
import {Button, FormControl, Input, Box, VStack, Text} from 'native-base'

function SignUpScreen () {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  

  // const validate = () => {
  //   if (values.name === undefined) {
  //     setErrors({ ...errors,
  //       name: 'Name is required'
  //     });
  //     return false;
  //   } else if (values.name.length < 3) {
  //     setErrors({ ...errors,
  //       name: 'Name is too short'
  //     });
  //     return false;
  //   }

  //   return true;
  // };

  const onSubmit = (e) => {
    e.PreventDefault
    var formdata = new FormData();
    formdata.append("name", "Esther Sad");
    formdata.append("email", "john.smith@gmail.com");
    formdata.append("password", "sd232325");
    formdata.append("password_confirmation", "sd232325");
    formdata.append("roles_id", "1");


fetch("https://niqsolution.com/api/auth/register", {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
})
.then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}
  

  return (
  <Box>
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired >
        <FormControl.Label _text={{
        bold: true}}>
          Username
        </FormControl.Label>
      <Input type="text" placeholder="username" value={values.username} onChangeText={text => setValues(text)} />

        <FormControl.Label _text={{
        bold: true}}>
          Email Address
        </FormControl.Label>
        <Input type="email" placeholder="email" value={values.email} onChangeText={text => setValues(text)} />
        
        <FormControl.Label _text={{
        bold: true}}>
          Password
        </FormControl.Label>
        <Input type="password" placeholder="password" value={values.password} onChangeText={text => setValues(text)} />

        <FormControl.Label _text={{
        bold: true}}>
          Confirm Password
        </FormControl.Label>
        <Input type="password" placeholder="confirm password" value={values.confirmPassword} onChangeText={text => setValues(text)} />

        
      </FormControl>
      
      
      
    </VStack>;
    <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </Box>)
}

export default SignUpScreen