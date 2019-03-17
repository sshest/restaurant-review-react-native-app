import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderStyle from './HeaderStyle'

const restaurants = [{
    name: 'React Cafe', address: '123 Anywhere str.'
}, {
    name: 'Funny restaurant', address: '456 Elsewhere str.'
}];

export default class App extends Component {

  render() {
    return (
      <View style={{
          flex: 1
      }}>
        <Text style={HeaderStyle.header}>Restaurant Review</Text>
          {
              restaurants.map((place, index) => {
                  return (
                      <View key={place.name}
                      style={[
                          styles.row,
                          {
                              backgroundColor: index % 2 === 0 ? 'white': '#F3F3F7'
                          }
                      ]}>
                          <View style={styles.edges}>
                              <Text>{index + 1}</Text>
                          </View>
                          <View style={styles.nameAddress}>
                              <Text>{place.name}</Text>
                              <Text style={styles.addressText}>{place.address}</Text>
                          </View>
                          <View style={styles.edges}><Text>Info</Text>
                          </View>
                      </View>
                  )
              })
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    nameAddress: {
        flexDirection:'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    }
});
