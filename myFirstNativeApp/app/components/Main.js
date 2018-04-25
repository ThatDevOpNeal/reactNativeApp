import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
/*
    ScrollView, allows the screen to be scrollable.
    TouchableOpacity are for buttons.
*/

export default class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text>To-Do List</Text>        
				</View>
				<ScrollView style={styles.scrollContainer}>
					<Text style={styles.headerText}>Neal</Text>
				</ScrollView>
				<View style={styles.footer}>
					<TextInput 
						style={styles.textInput}
						placeholder='note'
						placeholderTextColor='black'
						underlineColorAndroid='transparent'
					>
					</TextInput>
				</View>
				<TouchableOpacity style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: 'crimson',
	},
	headerText: {
		color: 'black',
		fontSize: 20,
		padding: 20,
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	textInput: {
		alignSelf: 'stretch',
		color: 'black',
		padding: 20,
		backgroundColor: 'lightgray',
		borderTopWidth: 3,
		borderTopColor: 'crimson',
	},
	addButton: {
		position: 'absolute',
		zIndex: 11,
		right: 20,
		bottom: 90,
		backgroundColor: 'crimson',
		width: 90,
		height: 90,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8, //Android only. Adds a drop shadow to the item
	},
	addButtonText: {
		color: 'white',
		fontSize: 30,
	}
});
