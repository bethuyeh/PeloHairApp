// import { Box, Text } from 'native-base'
// import  {React, useState, useRef, useEffect} from 'react'
// import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
// import Style from './Style'
// import * as Location from "expo-location"

// const MappedView = () => {

// const [position, setPosition] = useState(null)

// useEffect(() => {
//   checkPermission();
//   getLocation()
//   console.log(position)
//   ,[]
// })

// const checkPermission = async() => {
//     const hasPermission = await Location.requestForegroundPermissionsAsync();
//     if (hasPermission.granted) {
//         const permission = await askPermission();
//         return permission
//     }

//     return true
// }

// const askPermission = async() => {
//     const permission = await Location.requestForegroundPermissionsAsync()
//     return permission.status === 'granted';
// };

// const getLocation = async() => {
//     try {
//         const {granted} = await Location.requestForegroundPermissionsAsync();
//         if(!granted) return;
//         const {
//             coords: {latitude, longitude},         
//         } = await Location.getCurrentPositionAsync();
//         setPosition({latitude: latitude, longitude: longitude})
//     }catch (err){

//     }
// }

// const _map = useRef


//   return (
//     <Box flex={1} alignItems="center" justifyContent="center">
//       <Text>MapView</Text>
//       <MapView
//         ref = {_map}
//         provider={PROVIDER_GOOGLE}
//         style={Style.map}
//         showsUserLocation = {true}
//         followsUserLocation = {true}
//         rotateEnabled={true}
//         zoomEnabled={true}
//         toolbarEnabled={true}
//       />
//     </Box>
//   )
// }

// export default MappedView

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       position => {
//         setCurrentLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );

//     const watchId = Geolocation.watchPosition(
//       position => {
//         setCurrentLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, distanceFilter: 10 },
//     );

//     return () => Geolocation.clearWatch(watchId);
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: currentLocation.latitude,
//           longitude: currentLocation.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={currentLocation}
//           title="Current Location"
//           description="This is your current location"
//         />
//       </MapView>
//     </View>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { View, Text } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude:  9.072264,
    longitude: 7.491302
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    const watchId = Geolocation.watchPosition(
      position => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, distanceFilter: 10 },
    );

    return () => Geolocation.clearWatch(watchId);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={currentLocation}
          title="Current Location"
          description="This is your current location"
        />
      </MapView>
    </View>
  );
};

export default App;
