import React, { useState } from 'react';
import { View, Text, DateTimePicker } from 'react-native';

const Booking2 = () => {
  // State to store the selected time
  const [selectedTime, setSelectedTime] = useState(null);

  // Function to handle the date/time change in the DateTimePicker
  const handleTimeChange = (event, selectedDate) => {
    // If a time has already been selected, display an error message
    if (selectedTime) {
      return alert('This time has already been selected. Please choose a different time.');
    }
    // Update the selected time in state
    setSelectedTime(selectedDate);
  }

  return (
    <View>
      <Text>Book an appointment</Text>
      <DateTimePicker
        value={selectedTime}
        onChange={handleTimeChange}
        mode="time"
        minuteInterval={60} // Only allow full hours to be selected
      />
      {selectedTime && (
        <Text>Your Booking2ointment is scheduled for {selectedTime.toLocaleString()}</Text>
      )}
    </View>
  );
}

export default Booking2;

// import React, { useState } from 'react';
// import { View, Text, DateTimePicker } from 'react-native';

// const App = () => {
//   // State to store the selected time
//   const [selectedTime, setSelectedTime] = useState(null);

//   // Function to handle the date/time change in the DateTimePicker
//   const handleTimeChange = (event, selectedDate) => {
//     // If a time has already been selected, return an error message
//     if (selectedTime) {
//       return <h2>This time has already been selected. Please choose a different time.</h2>;
//     }
//     // Update the selected time in state
//     setSelectedTime(selectedDate);
//   }

//   return (
//     <View>
//       <Text>Book an Appointment</Text>
//       <DateTimePicker
//         value={selectedTime}
//         onChange={handleTimeChange}
//         mode="time"
//         minuteInterval={60} // Only allow full hours to be selected
//       />
//       {selectedTime && (
//         <Text>Your appointment is scheduled for {selectedTime.toLocaleString()}</Text>
//       )}
//     </View>
//   );
// }

// export default App;import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const MyDateTimePicker = () => {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showDateTimePicker = () => {
//     setShow(true);
//   };

//   return (
//     <View>
//       <Button onPress={showDateTimePicker} title="Show date and time picker" />
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="datetime"
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <Text>Selected date and time: {date.toString()}</Text>
//     </View>
//   );
// };

// export default MyDateTimePicker;

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyComponent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View>
      <Button title="Show date picker" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text>Selected date and time: {date.toString()}</Text>
    </View>
  );
};



