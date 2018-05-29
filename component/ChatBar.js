import React, { Component } from 'react';
import { View, StyleSheet, TextInput,} from 'react-native';
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

    input_data(textData) {
        this.setState({text: ''});
        return firebase.database().ref(this.ref).set(textData)
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.TextStyle}
                    underlineColorAndroid='white'
                    onChangeText={(text) =>
                        this.setState({text})
                    }
                    value={this.state.text}
                />
                <Icon
                    name='ios-send'
                    type="ionicon"
                    color='#00aced'
                    onPress={() => {
                        this.input_data(this.state.text);
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 20,
        color: 'black',
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth:3,
        borderBottomWidth:3,
        marginTop: 50
    },
});