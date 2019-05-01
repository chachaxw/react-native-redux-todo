import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import plusIcon from '../../icons/plus.png';
import ButtonIcon from '../Buttons/ButtonIcon';
import { postTodo } from '../../api';

const AddTodo = props => {
	const { actions } = props;

	let textInput;
	let textValue = '';

	const _onSubmitEditing = async () => {
		if (textValue.trim() !== '' && textValue.length > 0) {
			const res = await postTodo({todo: textValue});
			if (200 <= res.status < 300) {
				actions.addTodo(res);
			}
		}
		textInput && textInput.clear();
	}

	const _onChangeText = text => textValue = text;

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				autoCorrect={false}
				placeholder='Add an item...'
				underlineColorAndroid='transparent'
				returnKeyType='done'
				onChangeText={_onChangeText}
				onSubmitEditing={_onSubmitEditing}
				ref={el => textInput = el}
			/>
			<ButtonIcon 
				onPress={_onSubmitEditing}
				source={plusIcon}
				style={styles.plusButton}
				width={30}
				height={30}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	plusButton: {
		marginLeft: 10,
		marginRight: 10,
	},
	textInput: {
		flex: 1,
		alignSelf: 'center',
		height: 40,
		paddingLeft: 10,
		color: 'white',
		borderRadius: 2,
	},
});

AddTodo.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default AddTodo;