import { createContainer } from '../libs/containerBinding'

const mapStateToProps = state => {
	return {
		cars : state.cars
	}
};

const mapDispatchToProps = dispatch => {
	return {
		// destroyTodo : () => dispatch({
		// 	type : 'DESTROY_TODO'
		// })
	}
};

export default createContainer(mapStateToProps, mapDispatchToProps);