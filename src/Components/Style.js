import { StyleSheet, Dimensions } from "react-native";


const win = Dimensions.get('window');

const Style = StyleSheet.create({
        image: {
            alignSelf: 'stretch',
            width: win.width,
            
        },

        page: {
            alignSelf: 'stretch',
            height: win.height,
            
        },

        shadowProp: {
            backgroundColor: 'white',
            shadowColor: '#787878',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 1,
            shadowRadius: 3,
          },

          backgroundVideo: {
            position: 'absolute',
            alignSelf: 'stretch',
            width: win.width,
            
          },

          vendorsImage:{
            height: win.height * 0.25,
          },

          vendorsCard: {
            height: "20%"
          },

          lowProusity: {
            marginTop:"-90%"
          },

          mediumProusity: {
            marginTop: "-67.5%"
          },
          highProusity: {
            marginTop: "-37%"
          },

          mediumText: {
            marginTop: "30.5%"
          },

          lowText: {
            marginTop: "53%"
          },

          map:{
            width: win.width,
            height: win.height
          }
})

export default Style;