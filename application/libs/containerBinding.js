import React from 'react';
import { connect } from 'react-redux';

function createContainer(mapState, mapActions) {
	return (Component) => connect(mapState, mapActions)(props => <Component {...props} />)
}

export {
	createContainer,
}