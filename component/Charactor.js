import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {sentiment} from 'sentiment';
import firebase from "../firebase";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        this.ref = `users/uid1/message`;
    }


    getting_data = () => {
        return firebase.database().ref(this.ref).on('value', (snapshot) => {
            this.setState({message: snapshot.val()})
        });
    };


    componentDidMount(){
        this.getting_data()
    }

    EmoticonTranslator = (text) =>
    {
        var sentence = sentiment(text);

        if(sentence.comparative >= 0.5)
            return ('happy');//매우 좋은 기분
        else if(sentence.comparative >= 0)
            return ('good'); //좋은 기분인 편임
        else if(sentence.comparative <= -0.5)
            return ('fuck'); //매우 부정적인 기분
    };


    nowEmotion = this.EmoticonTranslator(this.state.message);

    render() {
        return (
            <View style={styles.container}>
                {this.state.message =! '' ?
                <Image
                style={{width: 300, height: 300}}
                source={require(`../gif/${this.nowEmotion}.gif`)}
            /> : <Text>'wait!'</Text>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        marginTop: 50
    },
});