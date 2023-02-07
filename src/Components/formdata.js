import React, { useState } from 'react';
import { View, Text, Input, TouchableOpacity, StyleSheet } from 'react-native';
import {Input} from 'native-base'

const Formapp = () => {
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

  const handleSubmit = () => {
    var formdata = new FormData();
    formdata.append("name", "Jesunifemi Me");
    formdata.append("email", "swinsonfirfe@gmail.com");
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
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        onChangeText={handleChange}
        value={values.username}
        placeholder="username"
        type="text"
      />

    <Input
        type="password"
        style={styles.input}
        onChangeText={handleChange}
        value={values.password}
        placeholder="password"
      />

    <Input
        type="password"
        style={styles.input}
        onChangeText={handleChange}
        value={values.confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: 'white'
  }
});

export default Formapp;