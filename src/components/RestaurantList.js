import React, {Component} from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    View
} from 'react-native';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import PizzaImage from 'images/pizza.png';

const restaurants = [
    {
        name: 'React Cafe', address: '123 Anywhere str.', rating: 3
    }, {
        name: 'Funny restaurant', address: '456 Elsewhere str.', rating: 4.2
    }, {
        name: 'Tacos', address: '22 Doctor Negrin str.', rating: 3.6
    }, {
        name: "Tony's dinner", address: "Some other address", rating: 3.3
    }, {
        name: "Teriyaki To Go", address: "Yet another address", rating: 5
    }, {
        name: "Hot Chicken", address: "Yet another address 2", rating: 4
    }, {
        name: "Coffee To Go", address: "Yet another address 3", rating: 2
    }, {
        name: "Dumplin House", address: "Yet another address 4", rating: 1.5
    }, {
        name: "Bombay Express", address: "Yet another address 5", rating: 2
    }, {
        name: 'React Cafe2', address: '123 Anywhere str.', rating: 3.2
    }, {
        name: 'Funny restaurant2', address: '456 Elsewhere str.', rating: 4.2
    }, {
        name: 'Tacos2', address: '22 Doctor Negrin str.', rating: 3.5
    }, {
        name: "Tony's dinne2r", address: "Some other address", rating: 1.3
    }, {
        name: "Teriyaki To Go2", address: "Yet another address", rating: 2.6
    }, {
        name: "Hot Chicken2", address: "Yet another address 2", rating: 2.4
    }, {
        name: "Coffee To Go2", address: "Yet another address 3", rating: 3.6
    }, {
        name: "Dumplin House2", address: "Yet another address 4", rating: 1.7
    }, {
        name: "Bombay Express3", address: "Yet another address 5", rating: 3
    },
];

export default class RestaurantList extends Component {
    state = {
        search: null,
        restaurants: []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                restaurants: restaurants
            })
        }, 1000);
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    marginTop: 30,
                    alignItems: 'center'
                }}>
                    <Image source={PizzaImage}
                           style={{
                               height: 150,
                               width: 150
                           }}/>
                </View>
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
                        this.state.restaurants
                            .filter(place => {
                                return !this.state.search
                                    || ~place.name.toLowerCase().indexOf(this.state.search.toLowerCase());
                            })
                    }
                    renderItem={
                        ({item, index}) => <RestaurantRow place={item} index={index}/>
                    }
                    keyExtractor={item => item.name}
                    initialNumberToRender={15}/>
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