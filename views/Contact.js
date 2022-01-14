import React from "react";
import {Text, View, StyleSheet, Dimensions, TextInput} from "react-native";
import email from 'react-native-email';

const winWidth = Dimensions.get('window').width,
    winHeight = Dimensions.get('window').height

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            subject: null,
            body: null,
            sent: false
        }
    }

    handleEmail = (type, data) => {
        if (type === 'email') {
            this.setState({
                email: data
            })
        } else if (type === 'subject') {
            this.setState({
                subject: data
            })
        } else {
            this.setState({
                body: data
            })
        }
    }

    sendEmail = () => {

        const to = [this.state.email] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['fred.geffray@gmail.com'], // string or array of email addresses
            //bcc: 'mee@mee.com', // string or array of email addresses
            subject: this.state.subject,
            body: this.state.body
        }).catch(console.error)
        this.setState({
            email: null,
            subject: null,
            body: null,
            sent: true
        })
        setTimeout(() => {
            this.setState({
                sent: false
            })
        }, 2000)
    }

    render() {

        return(
            <>
                {this.state.sent === false &&

                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={text => this.handleEmail('email', text)}
                            defaultValue={this.state.email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Sujet"
                            onChangeText={text => this.handleEmail('subject', text)}
                            defaultValue={this.state.subject}
                        />
                        <TextInput
                            style={styles.textArea}
                            placeholder="Message"
                            numberOfLines={10}
                            multiline={true}
                            defaultValue={this.state.body}
                            onChangeText={text => this.handleEmail('body', text)}
                        />
                        <Text onPress={() => this.sendEmail()}>Envoyer</Text>
                    </View>
                }
                {this.state.sent === true &&
                    <View style={styles.container2}>
                        <Text style={styles.confirmation}>Je t'ai bien eu, j'ai rien envoyé...</Text>
                    </View>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    confirmation: {
        fontStyle: 'italic',
        color: 'green',
        fontSize: 16,
        textAlign: 'center'
    },
    input: {
        margin: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        borderRadius: 8
    },
    textArea: {
        margin: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        borderRadius: 8
    }
})