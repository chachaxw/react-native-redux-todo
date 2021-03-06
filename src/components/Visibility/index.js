import React from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonFilter from '../Buttons/ButtonFilter';

const Visibility = props => {

	return (
		<View style={styles.container}>
			<ButtonFilter filter='SHOW_ALL'
				txtStyle={styles.text}
				activeStyle={styles.btnClicked}
				inActiveStyle={styles.btnUnclicked}
				activeOpacity={0.7}
				{...props} >
					View All
			</ButtonFilter>
			<ButtonFilter
				filter='SHOW_ACTIVE'
				txtStyle={styles.text}
				activeStyle={styles.btnClicked}
				inActiveStyle={styles.btnUnclicked}
				activeOpacity={0.7}
				{...props} >
					Active
			</ButtonFilter>
			<ButtonFilter
				filter='SHOW_COMPLETED'
				txtStyle={styles.text}
				activeStyle={styles.btnClicked}
				inActiveStyle={styles.btnUnclicked}
				activeOpacity={0.7}
				{...props} >
					Completed
			</ButtonFilter>
			<ButtonFilter
				filter='SHOW_FAVORITE'
				txtStyle={styles.text}
				activeStyle={styles.btnClicked}
				inActiveStyle={styles.btnUnclicked}
				activeOpacity={0.7}
				{...props} >
					Favorite
			</ButtonFilter>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10,
	},
	text: {
		margin: 5,
		color: 'white',
		backgroundColor: 'transparent',
	},
	btnClicked: {
		borderRadius: 5,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	btnUnclicked: {
		borderRadius: 5,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	}
});

export default Visibility;