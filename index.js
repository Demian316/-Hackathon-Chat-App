import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import ChatBar from './component/ChatBar';
import ChatBox from './component/ChatBox';
import Charactor from './component/Charactor';

const {width, height} = Dimensions.get('window');

export default class App extends Component {

    render() {
        return (
            <View>
            <ChatBox/>
            <Charactor/>
            <ChatBar/>
            </View>
    );
    }

};