import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native';

import Api from'../data/miniapi';

export default class CategoriesList extends Component {
    
    _renderItem = ({item}) => (
        <View style={styles.itemLista}>
            <Image source={{uri: item.imageUrl}} style={styles.bgimage}>
                <Text style={styles.titulo}>{item.name_en}</Text>
            </Image>
        </View>
    );

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewtext}>
                    <Text style={styles.toptext}>Menu</Text>
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
        backgroundColor: '#777',
        flexDirection: 'column',
        flex: 1
    },
    toptext: {
        marginTop: 30,
        fontSize: 22,
        color: '#fff',
        flex: 1,
        textAlign: 'center'
    },
    viewtext: {
        backgroundColor: '#f09',
        height: 70
    },
    bgimage: {
        flexDirection: 'row',
        flex: 1,
        height: 150
    },
    itemLista: {
        height: 150,
        flexDirection: 'row',
        flex: 1
    },
    listaCat: {
        flexDirection: 'column',
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