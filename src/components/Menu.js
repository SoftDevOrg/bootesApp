import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Api from'../data/miniapi';

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="bars" size={30} color="#fff" />)

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        drawerLabel: 'Menu',
        drawerIcon:({tintColor}) =>(
            <Icon 
                name='shopping-basket'
                size={18} 
                style={{color: tintColor}} 
            />)
    }

    _renderItem = ({item}) => (
        <View style={styles.itemLista}>
            <Image source={{uri: item.imageUrl}} style={styles.bgimage}>
                <Text style={styles.titulo}>{item.name_en}</Text>
            </Image>
        </View>
    );

    open() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return(
            
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.leftButton} underlayColor='#f09' onPress={this.open.bind(this)}>
                        { leftIcon }
                    </TouchableHighlight>
                    <Text style={styles.title}>Menu</Text>
                    <TouchableHighlight style={styles.rightButton}>
                        { rightIcon }
                    </TouchableHighlight>
                </View>
                <FlatList style={styles.listaCat}
                    data={Api.getCategories()}
                    renderItem={this._renderItem}
                />
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
    },
    bgimage: {
        flexDirection: 'column',
        flex: 1,
        height: 150
    },
    itemLista: {
        height: 150,
        flexDirection: 'row',
        flex: 1
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});