import React from 'react';
import { connect } from 'react-redux';

function createContainer(mapState, mapActions) {
	const connector = connect(mapState, mapActions);
	return Component => connector(props => <Component {...props} />)
}

export {
	createContainer,
}