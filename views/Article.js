import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import DateHumanizer from "../utils/DateHumanizer";

export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            goBack: props.goBack
        }
    }

    render() {

        let article = this.state.data
        return(
            <View>
                <Text onPress={this.state.goBack}>Retour</Text>
                <ScrollView style={styles.article}>
                    <Text
                        style={styles.title}
                    >
                        {article.title}
                    </Text>
                    <View style={styles.author_date}>
                        <Text style={styles.details}>
                            Publié par {article.author}
                        </Text>
                        <Text style={styles.details}>
                            le {DateHumanizer(article.date)}
                        </Text>
                    </View>
                    <Text
                        style={styles.chapo}
                    >
                        {article.chapo}
                    </Text>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{uri: article.image}}
                            style={styles.img}
                        />
                    </View>
                    <Text
                        style={styles.content}
                    >
                        {article.content}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    article: {
        padding: 20,
        fontSize: 18,
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 20,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    author_date: {
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    details: {
        opacity: 0.5,
        fontStyle: 'italic',
        fontSize: 12,
        textAlign: 'center'
    },
    chapo: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 18,
    },
    imgContainer: {
        height: 200,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#A1A1A1',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        backgroundColor: '#fff'
    },
    img: {
        height: 200
    },
    content: {
        textAlign: 'justify',
        marginTop: 20,
        paddingBottom: 20
    }
})