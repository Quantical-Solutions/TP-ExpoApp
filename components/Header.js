import React from "react";
import {View, StyleSheet, Image, TextInput} from "react-native";

export default class Header extends React.Component {

    render() {

        return(
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.img}/>
                <TextInput placeHolder="Recherche" style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F1'
    },
    img: {
        height: 30,
        width: 80,
        resizeMode: 'contain',
        margin: 20
    },
    input: {
        backgroundColor: '#fff',
        marginRight: 20,
        width: '50%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        shadowColor: 'black',
        shadowOffset: {x:10, y:10},
        shadowOpacity: 1,
        elevation: 3
    },
})