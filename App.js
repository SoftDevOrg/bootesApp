import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  DrawerNavigator,
  DrawerItems
} from 'react-navigation'

import Menu from './src/components/Menu';
import Cart from './src/components/Cart';
import Callus from './src/components/Callus';
import Contact from './src/components/Contact'; 

const App = DrawerNavigator({
  Menu: {
    screen: Menu
  },
  Cart: {
    screen: Cart
  },
  Callus: {
    screen: Callus
  },
  Contact: {
    screen: Contact
  }
}, {
  contentComponent: props => (
      <View style={styles.drawerContainer}>
          <View style={styles.headerDrawer}></View>
          <DrawerItems {...props} style={styles.item} />
      </View>
    ),
    contentOptions: {
      activeTintColor: '#121212',
      style: {
        borderBottomColor: '#000',
        borderBottomWidth: 500
      },
      labelStyle: {
        fontSize: 18
      },
      inactiveTintColor: '#787878',
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: 'white'
    }
});

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  headerDrawer: {
    flex: 0.7,
    backgroundColor: '#f09'
  },
  item: {
    marginTop: 10,
    marginRight: 35,
  }
});

export default App;