import {Center, Modal, VStack, HStack, Text, Button, Pressable} from 'native-base'
import React, {useState} from 'react'
import ButtonNew from './ButtonNew'
import  Colors  from '../Color'

const OrderInfos = [
  {
    title: "Products",
    price: 2600,
    color: "black"
  },

  {
    title: "Delivery",
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

const OrderModel = () => {

  // const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <ButtonNew 
        onPress={() => setShowModel(true)} 
        bg="#1AC0CC" 
        color="#fff" 
        mt={5}>
          SHOW PAYMENT & TOTAL
        
        </ButtonNew>

      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.Close Button>
            <Modal.Header>Order</Modal.Header>
              <Modal.Body>
                <VStack space={7}>

                {OrderInfos.map((i, index) => (
                  <HStack key={index} alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">{i.title}</Text>
                    <Text color={i.color === "main" ? "#1AC0CC" : '#000'} bold> ${i.price} </Text>
                  </HStack>
                )) }
                  
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                  <Pressable 
                    w="full" 
                    justifyCOntent="Center" 
                    bg="#22C5CF"
                    h={45}
                    rounded={2}
                    overflow="hidden"
                    onPress={
                      () => setShowModel(false)
                    }
                    >
                    <Image 
                      source={require("../../assets/PayPal.png")}
                      alt="paypal"
                      resizeMode="contain"
                      w="full"
                      h={34}

                    />
                    </Pressable>
                  <Button 
                    w="full"
                    mt={2}
                    bg="#000"
                    flex={1}  
                    h={45} 
                    _text={{
                    color:"#fff"
                    }}
                    onPress={() => {
                    // navigation.navigate("Home")
                    setShowModel(false)}}
                    _pressed={{
                    bg: "#1AC0CC",
                    }}
                  >
                    PLACE AN ORDER
                  </Button>
              </Modal.Footer>
          </Modal.Close> 
        </Modal.Content>
      </Modal>  
    </Center>
  )
}

export default OrderModel