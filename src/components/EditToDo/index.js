import PropTypes from 'prop-types';
import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import backIcon from '../../icons/back.png';

const EditToDo = props => {
	const { actions, id, text } = props;
	let textValue = text;

	const _onPress = () => {
		actions.editTodo(id, textValue);
		Actions.mainScreen({type: ActionConst.RESET});
	}

	const _onChangeText = value => textValue = value;

	return (
		<ScrollView style={styles.container}>
			<View style={styles.textInputWrapper}>
				<TextInput
					style={styles.textInput}
					onChangeText={_onChangeText}
					autoCapitalize='none'
					autoCorrect={false}
					multiline={true}>
						<Text style={styles.text}>{text}</Text>
				</TextInput>
			</View>
			<View style={styles.btnWrapper}>
				<TouchableOpacity 
					onPress={_onPress}
					activeOpacity={1}
					style={styles.btn}>
						<Image source={backIcon} style={styles.image}/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

EditToDo.propTypes = {
	todos: PropTypes.array,
	actions: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInputWrapper: {
		marginTop: 12,
		borderRadius: 4,
		marginHorizontal: 12,
	},
	textInput: {
		height: 100,
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	btnWrapper: {
		alignItems: 'center',
	},
	btn: {
		margin: 20,
		width: 40,
		height: 40,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	image: {
		width: 32,
		height: 32,
	},
});

export default EditToDo;