import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import moment from 'moment';

class MainPage extends Component {
    state = { 
        now: moment().format('YYYY-MM-DD HH:mm:ss')
     }

     componentDidMount() {
         this.timer = setInterval(() => {
            this.setState({ now:  moment().format('YYYY-MM-DD HH:mm:ss') })
         }, 1000)
     }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text style={style.time}>
                    { this.state.now }
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    time: {
        fontSize: 60,
        color: "red",
    }
})

export default MainPage;