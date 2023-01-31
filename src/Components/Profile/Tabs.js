import {useWindowDimensions, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import Profile from './Profile'
import Order from './Orders'

const renderScene = SceneMap({
    first: Profile,
    second:Order
})

const Tabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const [routes] = useState([

        {
            key: "first",
            title: "Profile"
        },

        {
            key: "second",
            title: "Orders"
        }
    ])

    const renderTabsBar = (props) =>(
        <TabBar
            {...props}
            tabStyle={styleProps.tabStyle}
            indicatorStyle={{backgroundColor: Colors.black}}
            activeColor={Colors.main} inactiveColor={Colors.white}
            renderLabel={({route, color}) => (
                <Text style={{color,...styles.text}}>{route.title}</Text>
            )}
        />
    )

  return (
    <TabView navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width: layout.width}}
    renderTabBar={renderTabsBar}
   />
  )
}

const styles = StyleSheet.create ({
    tabStyle: {
        backgroundColor: "black",
    },
    text:{
        fontSize: 13,
        fontWeight: "bold",
    },
})

export default Tabs