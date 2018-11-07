import React, { PureComponent } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../theme';
import CarItem from './carListItem';
import Container from './listScreen.container';

class ListScreen extends PureComponent {

	constructor(props){
		super(props);
		this.state = {
			cars : [],
		};
	}

	addCar(){
		const cars = [...this.state.cars, { name: 'dummy-' + this.state.cars.length }];
		this.setState({ cars })
	}

	render(){
		const { cars } = this.props;

		return (
			<View style={styles.screen}>
				<View style={styles.header}>
					<Text>List the cars</Text>
				</View>
				<FlatList
					style={styles.list}
					data={cars}
					keyExtractor={item => item.id}
					renderItem={({item}) => <CarItem {...item}/>}
				/>
				<TouchableOpacity
					style={styles.addButton}
					onPress={e => this.addCar()}
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
	list: {
		width: '100%',
		flex: 1,
		borderTopWidth: 2,
		borderColor: colors.fuchsia,
	},
	addButton: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: colors.white,
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

export default Container(ListScreen);
