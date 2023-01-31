import { Heading, Text, View } from 'native-base'
import {React, useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import NumericInput from 'react-native-numeric-input'
import ButtonNew from '../Components/Button'
import { useNavigation } from '@react-navigation/native'


const SingleProduct = () => {

    const [value, setValue] = useState(0);

    const navigation = useNavigation()

    const products = route.params

    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>SingleProduct
                <Image 
                source={{uri: products.image}} 
                alt="Image" 
                w="full" 
                h={300} 
                resizeMode="contain"
                />

                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    {products.name}
                </Heading>

                <Rating value={products.rating} text={`${product.numReviews} reviews`}/>
                <HStack space={2} alignItems="center" my={5}>
                {
                    product.countInStock > 0 ? (
                      
                       
                       <NumericInput 
                            value={value} 
                            totalWidth={140} 
                            totalHeight={30} 
                            iconSize={25}
                            step={1}
                            maxValue={product.countInStock}
                            minValue={0}
                            borderColor={Colors.deepGray}
                            rounded
                            textColor={Colors.black}
                            iconStyle={{color:Colors.white }}
                            rightButtonBackgroundColor={Colors.main}
                            leftButtonBackgroundColor={Colors.main}
                        />
                    ) :
                    
                    <Heading bold color={Colors.red} fontSize={12}>Out of Stock</Heading>
                    }
                    
                    <Spacer/>
                    
                    <Heading bold color={Colors.black} fontSize={19}>${product.price}</Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    {product.description}
                </Text>
                <ButtonNew bg={Colors.main} color={Colors.white} mt={10}>
                    ADD TO CART
                </ButtonNew>
               {/* REVIEW */}
                <Review/>
            </ScrollView>
        </Box>


  )
}

export default SingleProduct