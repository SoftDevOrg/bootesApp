import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="chevron-left" size={30} color="#fff" />)

export default class ProductsByCat extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }
    
    render() {
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.leftButton} underlayColor='#f09' onPress={()=>goBack()}>
                        { leftIcon }
                    </TouchableHighlight>
                    <Text style={styles.title}>Category</Text>
                    <TouchableHighlight style={styles.rightButton}>
                        { rightIcon }
                    </TouchableHighlight>
                </View>
                <Text style={styles.text}>Products By Category Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        color: '#fff',
        flex: 70,
        textAlign: 'center'
    },
    header: {
        backgroundColor: '#f09',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between'
    },
    leftButton: {
        flex:15,
        marginTop: 32,
        marginLeft: 10
    },
    rightButton: {
        flex:15,
        marginTop: 32,
        marginRight: -20
    }
  });
  