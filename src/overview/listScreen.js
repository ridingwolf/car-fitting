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
		console.log('state:', { state:  this.state });
		return (
			<View style={styles.screen}>
				<View style={styles.header}>
					<Text>List the cars</Text>
				</View>
				<FlatList
					style={styles.list}
					data={this.state.cars}
					keyExtractor={item => item.name}
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