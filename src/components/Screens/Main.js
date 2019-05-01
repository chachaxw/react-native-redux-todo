import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import Wallpaper from '../Wallpaper';
import AddTodo from '../AddTodo';
import Visibility from '../Visibility';
import ListTodo from '../ListTodo';

class Main extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<AddTodo {...this.props}/>
					<Visibility {...this.props} />
					<ListTodo {...this.props} />
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});

Main.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);