import {React, useState} from 'react';
import {Box, Button, Text} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [reservedTimes, setReservedTimes] = useState([]);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // const showDateTimePicker = () => {
    //   setShow(true);
    // };

    if (event.type === 'set') {
      const hour = currentDate.getHours();
      const reserved = reservedTimes.includes(hour);

      if (reserved) {
        console.log('This time has already been reserved');
      } else {
        setReservedTimes([...reservedTimes, hour]);
        console.log('The time was reserved successfully');
      }
    }
  };

  return (
    
    
    <Box borderWidth={7} bg="#787878" flex={1}>
       <Box><Button  h="50" w="90%" bg="cyan.400" mt={6} px={4} onPress={() => {
      setShow(true)}}>Select Date and Time</Button></Box>

      {show && (
        <Box>
      <DateTimePicker
        value={date}
        mode="datetime"
        is24Hour={true}
        display="default"
        onChange={onChange}
        maximumDate={new Date(2022, 11, 31)}
        minimumDate={new Date()}
        minimumTime={new Date(2022, 0, 1, 9, 0, 0)}
        maximumTime={new Date(2023, 11, 31, 17, 0, 0)}
        style={{width: 320,
        textAlign: "center",
         backgroundColor: "white"}}
      /></Box>)}
      <Text>Selected date and time: {date.toString()}</Text>
      </Box>
     
   
  );
};

export default Booking

