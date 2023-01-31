import { Box, FormControl, Heading, Select, TextArea, VStack } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Rating from './Rating'

const Review = () => {
  const [rating, setRating] = useState('')
  return (
    <Box my={9}>

        <Heading bold fontSize={15} mb={2}>
        REVIEW
        </Heading>

        {/* IF THERE'S NO REVIEW */}
        {/* <Message 
          color={Colors.main} 
          bg={Colors.deepGray}
          bold 
          children={"No Reviews"}
          /> */}
        
        {/* REVIEW */}
        <Box>
          <Heading 
          fontSize={15} 
          mt={5} 
          rounded={5}
          > Amara Kalu
          </Heading>

          <Rating value={4}/>

          <Text mb={2} fontSize={11}>Jul 12 2022</Text>

          <Message 
            color="#000" 
            bg="#fff" 
            size={12} 
            children={"molestias enim suscipit commodi laborum corporis ad, natus dignissimos numquam!"}
          />

        </Box>  
         WRITE REVIEW 
         <Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
              REVIEW THIS PRODUCT
            </Heading>
            <VStack space={6}>
              <FormControl>
                <FormControl.Label
                  _text={{
                  fontSize: "12px",
                  fontWeight: "bold",    
                  }}
                >
                Rating
              </FormControl.Label>

                <Select 
                  bg="#1ACC0C" 
                  borderWidth={0} 
                  rounded={5} 
                  py={3} 
                  placeholder="Rate This Product"
                  _selectedItem={{
                    bg:"#1ACC0C",
                    endIcon:<CheckIcon size={3}/>
                  }}
                  selectedValue={rating}
                  onValueChange={(e) => setRating(e)}
                >
                  <Select.Item label='1 - Poor' value="1"/>
                  <Select.Item label='2 - Fair' value="1"/>
                  <Select.Item label='2 - Good' value="1"/>
        
                </Select>
              </FormControl>

              <FormControl>
                <FormControl.Label
                    _text={{
                    fontSize: "12px",
                    fontWeight: "bold",    
                    }}
                  >
                  Comment
                </FormControl.Label>

                <TextArea 
                  h={24} 
                  w="full" 
                  placeholder="Say Something About Exprience"
                  borderWidth={0}
                  bg="#1ACC0C"
                  py={4}
                  _focus={{
                    bg: "#1ACC0C",
                  }}
                />
              </FormControl>

           

        
              <Message 
                color="#000" 
                bg="#1ACC0C" 
                size={12} 
                children={"molestias enim suscipit commodi laborum corporis ad, natus dignissimos numquam!"}
              />
            </VStack>
         </Box>
    </Box>
  )
}

export default Review