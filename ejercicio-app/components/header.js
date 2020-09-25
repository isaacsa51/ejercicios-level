import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
	return (
    	<View style={styles.header}>
    		<Text style={styles.title}>Ejercicio 1</Text>
    	</View>
  	);
}

const styles = StyleSheet.create({
	header: {
    	height: 80,
    	paddingTop: 38,
    	backgroundColor: '#c4d043',
  	},
  	title: {
    	textAlign: 'center',
    	color: '#fff',
    	fontSize: 20,
    	fontWeight: 'bold',
  	}
});	