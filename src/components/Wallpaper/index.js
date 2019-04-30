import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';

import bgSrc from '../../images/bg.jpg';

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={styles.picture} source={bgSrc}>
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