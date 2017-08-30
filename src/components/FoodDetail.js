import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="chevron-left" size={30} color="#fff" />)

export default class FoodDetail extends Component {
    constructor(props) {
        super(props);
    }    
    
    _goBack() {
        const {goBack} = this.props.navigation.state.params;
        goBack();
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.leftButton} underlayColor='#f09' onPress={this._goBack()}>
                        { leftIcon }
                    </TouchableHighlight>
                    <Text style={styles.title}>Food</Text>
                    <TouchableHighlight style={styles.rightButton}>
                        { rightIcon }
                    </TouchableHighlight>
                </View>
                <Text style={styles.text}>Food Detail Screen</Text>
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
  