import React, { PureComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { colors } from '../theme';

class CarListItem extends PureComponent {
	render(){
		const {
			brand = '',
			model = '',
		} = this.props;
		return (
			<View style={styles.itemContainer}>
				<Text>{brand} {model}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		padding: 20,
		borderColor: colors.fuchsia,
		borderBottomWidth: 1,
	},
});

export default CarListItem;