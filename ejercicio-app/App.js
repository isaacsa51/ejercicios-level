import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import CheckPerson from './components/checkPerson';

export default function App() {
	// Array to storage all the persons registered
	const [persons, setPerson] = useState([
  	]);

	// Handler to add a new Person
  	const kilometersHandle = (Number) => {
		if(km > 3){

			//Save the date in the array and assign a random key
			setPerson(prevPerson => {
				return [
					{name, email, km, key: Math.random().toString() },
					...prevPerson
				];
			});

			Alert.alert('¡Felicidades!', 'Nombre: ' + name + '\nCorreo: ' + email);
		}else {
      		Alert.alert('Debes de caminar más', 'Tienes que caminar mas de 4km.', [
        		{text: 'Prometo caminar más...'}
      		]);
    	}
  	};

	return (
    	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      		{/* Show the header of the app */}
			<View style={styles.container}>	
    			<Header />
        		
				{/* Show the content inside the container */}
				<View style={styles.content}>
					<CheckPerson submitHandler={kilometersHandle} />
        		</View>
      		</View>
    	</TouchableWithoutFeedback>
 	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#fff',
  	},
  	content: {
    	padding: 40,
  	},
  	list: {
    	marginTop: 20,
  	},
});