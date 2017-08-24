import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Callus extends Component {
    static navigationOptions = {
        drawerLabel: 'Call us',
        drawerIcon:({tintColor}) =>(
            <Icon 
                name='phone'
                size={18} 
                style={{color: tintColor}} 
            />)
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Call Us Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: '#eee'
    }
  });
  