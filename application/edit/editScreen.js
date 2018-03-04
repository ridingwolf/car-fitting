import React, { PureComponent } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation'

class EditScreen extends PureComponent {

	navigateBack(){
		const backAction = NavigationActions.back({});
		this.navigation && this.navigation.dispatch(backAction);
	}

	render(){
		return (
			<View>
				<TouchableOpacity
					onPress={e => this.navigateBack()}
				>
					<Text>GO BACK!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export  default EditScreen