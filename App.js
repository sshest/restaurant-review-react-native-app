import React, {Component} from 'react';

import { Text, View } from 'react-native';

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
        <Text style={{
            padding: 40,
            fontSize: 30,
            textAlign: 'center',
            color: '#0066CC',
            fontWeight: '300'
        }}>Restaurant Review</Text>
          {
              restaurants.map((place, index) => {
                  return (
                      <View key={place.name}
                      style={{
                          flexDirection: 'row'
                      }}>
                          <View style={{
                              flex:1,
                              alignItems: 'center',
                              justifyContent: 'center'
                          }}>
                              <Text>{index + 1}</Text>
                          </View>
                          <View style={{
                              flexDirection:'column',
                              flex: 8
                          }}>
                              <Text>{place.name}</Text>
                              <Text style={{color: 'grey'}}>{place.address}</Text>
                          </View>
                          <View style={{
                              flex:1,
                              alignItems: 'center',
                              justifyContent: 'center'
                          }}><Text>Info</Text>
                          </View>
                      </View>
                  )
              })
          }
      </View>
    );
  }
}
