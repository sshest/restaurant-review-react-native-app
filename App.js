import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View } from 'react-native';

import Header from 'components/Header';

const restaurants = [
    {
        name: 'React Cafe', address: '123 Anywhere str.'
    }, {
        name: 'Funny restaurant', address: '456 Elsewhere str.'
    }, {
        name: 'Tacos', address: '22 Doctor Negrin str.'
    }, {
       name: "Tony's dinner", address: "Some other address"
    }, {
        name: "Teriyaki To Go", address: "Yet another address"
    }, {
        name: "Hot Chicken", address: "Yet another address 2"
    }, {
        name: "Coffee To Go", address: "Yet another address 3"
    }, {
        name: "Dumplin House", address: "Yet another address 4"
    }, {
        name: "Bombay Express", address: "Yet another address 5"
    },
];

export default class App extends Component {
    state = {
        search: null
    };

      render() {
        return (
          <View style={{
              flex: 1
          }}>
              <Header/>
              <TextInput
                  style={
                      styles.input
                  }
                  placeholder="Live Search"
                  onChangeText={
                    text => {
                      this.setState({
                          search: text
                      })
                    }
                  }
              />
              <ScrollView
              contentContainerStyle={{
                  paddingTop: 30
              }}>
                {
                  restaurants
                      .filter(place => {
                          return !this.state.search
                              || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
                      })
                      .map((place, index) => {
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
              </ScrollView>
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
    },
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5'
    }
});
