import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    View
} from 'react-native';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';

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
    }, {
        name: 'React Cafe2', address: '123 Anywhere str.'
    }, {
        name: 'Funny restaurant2', address: '456 Elsewhere str.'
    }, {
        name: 'Tacos2', address: '22 Doctor Negrin str.'
    }, {
        name: "Tony's dinne2r", address: "Some other address"
    }, {
        name: "Teriyaki To Go2", address: "Yet another address"
    }, {
        name: "Hot Chicken2", address: "Yet another address 2"
    }, {
        name: "Coffee To Go2", address: "Yet another address 3"
    }, {
        name: "Dumplin House2", address: "Yet another address 4"
    }, {
        name: "Bombay Express3", address: "Yet another address 5"
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
              <FlatList
                  data={
                      restaurants
                          .filter(place => {
                              return !this.state.search
                                  || ~place.name.toLowerCase().indexOf(this.state.search.toLowerCase());
                          })
                  }
                  renderItem={
                      ({item, index}) => <RestaurantRow place={item} index={index}/>
                  }
                  keyExtractor={item => item.name}
                  initialNumberToRender={18}/>
          </View>
        );
      }
}

const styles = StyleSheet.create({
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
