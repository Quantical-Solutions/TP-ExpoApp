import React from "react";
import { View, Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Weather from "../../views/Weather";
import WeatherToCome from "../../views/WeatherToCome";

const Tab = createMaterialTopTabNavigator()

export default class Swiper extends React.Component {

    render() {

        return(
            <View style={{flex: 1}}>
                <Tab.Navigator>

                    <Tab.Screen
                        name="Aujourd'hui"
                        children={() => <Weather/>}
                        options={{
                            tabBarIcon: () => (<Image source={require("../../assets/today.png")} style={{width: 20, height: 20}} />)
                        }}
                    />

                    <Tab.Screen
                        name="Semaine"
                        children={() => <WeatherToCome/>}
                        options={{
                            tabBarIcon: () => (<Image source={require("../../assets/calendar.png")} style={{width: 20, height: 20}} />)
                        }}
                    />

                </Tab.Navigator>
            </View>
        )
    }
}