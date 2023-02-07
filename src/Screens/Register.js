import React, {useState} from 'react'
import {Button, FormControl, Input, Box, VStack} from 'native-base'


function Register () {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })  
  }
  

  const onSubmit = () => {
    var formdata = new FormData();
    formdata.append("name", "Esther Sad");
    formdata.append("email", "john.smith@gmail.com");
    formdata.append("password", "sd232325");
    formdata.append("password_confirmation", "sd232325");
    formdata.append("roles_id", "1");

    var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://niqsolution.com/api/auth/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
  <Box>
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{
        bold: true}}>
          Name
        </FormControl.Label>
      <Input type="text" placeholder="username" value={values.username} onChangeText={handleChange} />

        <FormControl.Label _text={{
        bold: true}}>
          Name
        </FormControl.Label>
        <Input type="email" placeholder="email" value={values.email} onChangeText={handleChange} />
        
        <FormControl.Label _text={{
        bold: true}}>
          Name
        </FormControl.Label>
        <Input type="password" placeholder="password" value={values.password} onChangeText={handleChange} />

        <FormControl.Label _text={{
        bold: true}}>
          Name
        </FormControl.Label>
        <Input type="password" placeholder="confirm password" value={values.confirmPassword} onChangeText={handleChange} />

        {'name' in errors ? 
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain at least 3 characters.
          </FormControl.HelperText>}
      </FormControl>
      
      
      
    </VStack>;
    <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </Box>)
}
}
export default Register