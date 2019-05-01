import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonFilter = props => {
	const {
		children,
		actions,
		visibilityFilter,
		filter,
		txtStyle,
		activeOpacity,
		activeStyle,
		inActiveStyle,
	} = props;

	const _onPress = () => actions.setVisibilityFilter(filter);
	const activeOrNot = (filter === visibilityFilter) ? activeStyle : inActiveStyle;

	return (
		<TouchableOpacity activeOpacity={activeOpacity}
			onPress={_onPress} style={activeOrNot}>
				<Text style={txtStyle}>
					{children}
				</Text>
		</TouchableOpacity>
	);
};

ButtonFilter.propTypes = {
	todos: PropTypes.array,
	actions: PropTypes.object.isRequired,
	visibilityFilter: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	txtStyle: PropTypes.object,
	activeOpacity: PropTypes.number,
	activeStyle: PropTypes.object.isRequired,
	inActiveStyle: PropTypes.object.isRequired,
};

export default ButtonFilter;