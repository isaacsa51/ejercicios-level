import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function CheckPerson({ submitHandler }) {
	[name, setName] = useState('');
	[email, setEmail] = useState('');
	[km, setKm] = useState();

  	return (
    	<View>
      		<TextInput 
        		style={styles.input} 
        		placeholder='Nombre'
        		onChangeText={(val) => setName(val)} 
      		/>
			<TextInput
				style={styles.input}
				placeholder='Email'
				onChangeText={(val) => setEmail(val)}
			/>
			<TextInput
				keyboardType='numeric'
				style={styles.input}
				placeholder='Kilometros caminados'
				onChangeText={(val) => setKm(val)}
			/>

    		<Button color='#585490' onPress={() => submitHandler(name, email, km)} title='Registrar' />
    	</View>
  	);
}

const styles = StyleSheet.create({
	input: {
    	marginBottom: 10,
    	paddingHorizontal: 8,
    	paddingVertical: 6,
    	borderBottomWidth: 2,
    	borderBottomColor: '#ddd',
  	},
});