import {Center, Modal, VStack, HStack, Text, Button} from 'native-base'
import React, {useState} from 'react'
import ButtonNew from './ButtonNew'
import  Colors  from '../Color'
import { useNavigation } from '@react-navigation/native'

const OrderInfos = [
  {
    title: "Products",
    price: 2600,
    color: "black"
  },

  {
    title: "Shipping",
    price: 500,
    color: "black"
  },

  {
    title: "Total Amount",
    price: 3100,
    color: "black"
  },

  {
    title: "Products",
    price: 34.99,
    color: "black"
  }
]

const PlaceModel = () => {

  // const navigation = useNavigation()

  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <ButtonNew 
        onPress={() => setShowModel(true)} 
        bg={Colors.black} 
        color={Colors.white} 
        mt={5}>PlaceModel</ButtonNew>

      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.Close Button>
            <Modal.Header>Order</Modal.Header>
              <Modal.Body>
                <VStack space={7}>
                {OrderInfos.map((i, index) => (
                  <HStack key={index} alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">{i.title}</Text>
                    <Text color={i.color === "main" ? Colors.main : Colors.black} bold> ${i.price} </Text>
                  </HStack>
                )) }
                  
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                  <Button flex={1} bg={Colors.main} h={45} _text={{
                    colot:Colors.white
                  }}
                  onPress={() => {
                  navigation.navigate("order")
                  setShowModel(false)}}
                  _pressed={{
                    bg: Colors.main,
                  }}
                  >

                  </Button>
              </Modal.Footer>
          </Modal.Close> 
        </Modal.Content>
      </Modal>  
    </Center>
  )
}

export default PlaceModel