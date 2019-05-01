import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import {
	StyleSheet,
	View,
	Platform,
} from 'react-native';

import Wallpaper from '../Wallpaper';
import EditTodo from '../EditTodo';

class EditScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<EditTodo {...this.props}/>
			</View>
		);
	}
}

const statusbarTop = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: statusbarTop,
	}
});

EditScreen.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		todos: state.todos,
		visibilityFilter: state.visibilityFilter,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);