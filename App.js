import { StatusBar } from 'expo-status-bar';
import { StatusBar as TopBar, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from "./components/navigations/Bottom";

const HEIGHT = (Platform.OS === "android") ? TopBar.currentHeight : 0

export default class App extends React.Component {

    render() {

        return (
            <SafeAreaView style={styles.top}>
                <NavigationContainer>
                    <Bottom/>
                    <StatusBar style="auto"/>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        paddingTop: HEIGHT,
        flex: 1
    }
})