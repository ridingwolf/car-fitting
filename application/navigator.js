import React from 'react';
import { StackNavigator } from 'react-navigation';
import CarListScreen from './listing/listScreen';
import EditScreen from './edit/editScreen';

const ApplicationNavigator = StackNavigator({
	Home: {
		screen: CarListScreen
	},
	Edit: {
		screen: EditScreen
	}
});

export default ApplicationNavigator;