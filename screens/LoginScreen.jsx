
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button , Platform } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../src/config/credenciales.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


export const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date ());
  const [gender, setGender] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const auth = getAuth(appFirebase);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => {
        console.log('Bienvenido:', userCredential.user)
        //console.log(userCredential)
        props.navigation.navigate('Pets')
      })
      .catch((error) => {
        Alert.alert('Usuario o contraseña Incorrecta')
        console.error('Error al iniciar sesión:', error)
      });
  };
  
  const handleRegister = () => {
    // Primero navega a la página 'RegisterForm'
    props.navigation.navigate('RegisterForm');

    // Luego valida las credenciales del usuario
    createUserWithEmailAndPassword(auth, email, password, firstName, lastName, dateOfBirth, gender)
        .then((userCredential) => {
            console.log('Usuario registrado:', userCredential.user);
            props.navigation.navigate('pets');
        })
        .catch((error) => {
            Alert.alert('Error al registrar el usuario');
            console.error('Error al registrar:', error);
        });
};



return (
  <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
      />
      <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
  </View>
);
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


