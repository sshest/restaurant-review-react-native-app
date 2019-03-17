import React, {Component} from 'react';

import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{
            padding: 40,
            fontSize: 30,
            textAlign: 'center',
            color: '#0066CC',
            fontWeight: '300'
        }}>Restaurant Review</Text>
          <Text>
              React Cafe
          </Text>
          <Text style={{color: 'grey'}}>
              123 Anywhere str.
          </Text>
          <Text>
              Funny restaurant
          </Text>
          <Text style={{color: 'grey'}}>
              456 Elsewhere str.
          </Text>
      </View>
    );
  }
}
