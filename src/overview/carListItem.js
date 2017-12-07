import React, { PureComponent } from 'react';
import {
	View,
	Text,
} from 'react-native';

class CarListItem extends PureComponent {
	render(){
		const {
			name = '',
		} = this.props;
		return (
			<View>
				<Text>Name: {name}</Text>
			</View>
		);
	}
}

export default CarListItem;