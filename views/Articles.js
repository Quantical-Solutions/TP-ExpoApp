import React from "react";
import { Text, FlatList, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import XHR from "../utils/XHR";
import DateHumanizer from '../utils/DateHumanizer';
import Article from "./Article";

const call = 'http://api.eint-sandbox.fr?token=1234&',
    winWidth = Dimensions.get('window').width,
    winHeight = Dimensions.get('window').height

export default class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            single: false,
            soloData: null
        }
    }

    componentDidMount() {

        XHR('fred', call, {table: 'articles'}, (response) => {
            this.setState({data: response.data})
        })
    }

    getArticle = (article) => {
        this.setState({
            soloData: article,
            single: true
        })
    }

    goBack = () => {
        this.setState({
            soloData: null,
            single: false
        })
    }

    render() {

        return(
            <>
                {this.state.single === false &&
                    <View style={styles.container}>
                        <FlatList
                            numColumns={2}
                            data={this.state.data}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    onPress={() => this.getArticle(item)}
                                    style={styles.article}
                                >
                                    <Text
                                        style={styles.title}
                                    >
                                        {item.title}
                                    </Text>
                                    <View style={styles.author_date}>
                                        <Text style={styles.details}>
                                            Publié par {item.author}
                                        </Text>
                                        <Text style={styles.details}>
                                            le {DateHumanizer(item.date)}
                                        </Text>
                                    </View>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            source={{uri: item.image}}
                                            style={styles.img}
                                        />
                                    </View>
                                    <Text
                                        style={styles.chapo}
                                    >
                                        {item.chapo}
                                    </Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
                {this.state.single === true &&
                    <Article
                        data={this.state.soloData}
                        goBack={this.goBack}
                    />
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    article: {
        width: winWidth / 2 - 20,
        padding: 20,
        margin: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 5,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    author_date: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    details: {
        opacity: 0.5,
        fontStyle: 'italic',
        fontSize: 8,
        textAlign: 'center'
    },
    chapo: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 12,
    },
    imgContainer: {
        height: 100,
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
        height: winWidth / 3,
    }
})