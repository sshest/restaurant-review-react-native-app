import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import RestaurantList from 'components/RestaurantList';


export default createStackNavigator({
    Home: { screen: RestaurantList }
});
