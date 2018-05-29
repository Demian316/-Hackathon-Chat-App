import React, {Component} from 'react';
import {View, StyleSheet, TextInput,Text} from 'react-native';
import {Icon} from 'react-native-elements';
import firebase from '../firebase';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.ref = `users/uid1/message`;
    }


    getting_data = () => {
        return firebase.database().ref(this.ref).on('value', (snapshot) => {
            this.setState({text: snapshot.val()})

            setTimeout(()=>this.remove_data(),5000)
        });
    };
    remove_data() {

        return firebase.database().ref(this.ref).set('')
    }

    _displayChatBox = (chatText) => {
        return chatText;
    };

    componentDidMount() {
        this.getting_data();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        marginTop: 50
    },
});