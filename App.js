import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApplicationNavigator from './application/navigator';
import reducer from "./application/reducer";

class Application extends PureComponent{

	constructor(props){
		super(props);
		this.store = createStore(reducer, {});
	}

	componentDidMount(){
		this.store.dispatch({ type: 'APP_START' });
	}

	render(){
		return (
			<Provider store={this.store}>
				<ApplicationNavigator/>
			</Provider>
		);
	}
}


export default Application;