import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';

export default class Menu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.menuHeader}></View>
                <View style={styles.menu}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    menuHeader: {
        flex: 1,
        backgroundColor: '#f09'
    },
    menu: {
        flex: 3,
        backgroundColor: '#eee'
    }
});