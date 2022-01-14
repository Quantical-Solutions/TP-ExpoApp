import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from "../../views/Contact";
import Articles from "../../views/Articles";
import Swiper from "./Swiper";
import { Image } from "react-native";

const BottomTab = createBottomTabNavigator()

export default class Bottom extends React.Component {

    render() {

        return(
            <BottomTab.Navigator>

                <BottomTab.Screen
                    name="Blog"
                    children={() => <Articles/>}
                    options={{
                        tabBarIcon: () => (<Image source={require('../../assets/newspaper.png')} style={{width: 20, height: 20}}/>),
                        headerShown: false,
                    }}
                />

                <BottomTab.Screen
                    name="Météo"
                    children={() => <Swiper/>}
                    options={{
                        tabBarIcon: () => (<Image source={require('../../assets/cloud-sun.png')} style={{width: 20, height: 20}}/>),
                        headerShown: false,
                    }}
                />

                <BottomTab.Screen
                    name="Contact"
                    children={() => <Contact/>}
                    options={{
                        tabBarIcon: () => (<Image source={require('../../assets/paper-plane.png')} style={{width: 20, height: 20}}/>),
                        headerShown: false,
                    }}
                />

            </BottomTab.Navigator>
        )
    }
}