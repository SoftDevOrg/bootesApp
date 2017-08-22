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
import Menu from './Menu';
import { SideMenu } from 'react-native-elements';

import Api from'../data/miniapi';

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="bars" size={30} color="#fff" />)

export default class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    _renderItem = ({item}) => (
        <View style={styles.itemLista}>
            <Image source={{uri: item.imageUrl}} style={styles.bgimage}>
                <Text style={styles.titulo}>{item.name_en}</Text>
            </Image>
        </View>
    );

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({isOpen});
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <SideMenu 
                    menu={<Menu />} 
                    isOpen={this.state.isOpen} 
                    onChange={(isOpen) => this.updateMenu(isOpen)} 
                    style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <TouchableHighlight style={styles.leftButton} onPress={this.toggle.bind(this)}>
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
                </SideMenu>
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