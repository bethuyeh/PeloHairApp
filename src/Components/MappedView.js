import { Box, Text } from 'native-base'
import  {React, useState, useRef, useEffect} from 'react'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
import Style from './Style'
import * as Location from "expo-location"

const MappedView = () => {

const [position, setPosition] = useState(null)

useEffect(() => {
  const checkPermission = async() => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.granted) await Location.requestBackgroundPermissionsAsync();  
    checkPermission()
}
  getLocation()
  console.log(position)
 
} ,[])


const getLocation = async() => {
  
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted) return;
        const {
            coords: {latitude, longitude},         
        } = await Location.getCurrentPositionAsync();
        setPosition({latitude: latitude, longitude: longitude})
    }

const _map = useRef


  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>MapView</Text>
      <MapView
        ref = {_map}
        provider={PROVIDER_GOOGLE}
        style={Style.map}
        showsUserLocation = {true}
        followsUserLocation = {true}
        rotateEnabled={true}
        zoomEnabled={true}
        toolbarEnabled={true}
      />
    </Box>
  )
}

export default MappedView