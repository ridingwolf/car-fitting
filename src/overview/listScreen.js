import React, { PureComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../theme'

class ListScreen extends PureComponent {

	render(){
		return (
			<View style={styles.screen}>
				<View style={styles.header}>
					<Text>List the cars</Text>
				</View>
				<TouchableOpacity
					style={styles.addButton}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	header: {
		width: '100%',
		alignItems: 'center',
		padding: 20,
	},
	addButton: {
		borderRadius: 20,
		height: 40,
		width: 40,
		backgroundColor: colors.fuchsia,
		position: 'absolute',
		right: 20,
		bottom: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButtonText: {
		color : colors.white,
		fontSize: 40,
		marginBottom: 5,
	},
});

export default ListScreen;