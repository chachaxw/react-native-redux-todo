import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import wallpaper from '../../images/Wallpaper.png';

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={styles.picture} source={wallpaper}>
				{this.props.children}
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
});