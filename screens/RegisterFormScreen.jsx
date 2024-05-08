import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const RegisterFormScreen = ({ navigation }) => {
    return (
        <View>
            {/* Aquí coloca tu formulario de registro */}
            <Text>Formulario de Registro</Text>
            {/* Agrega campos de entrada, botones, etc. */}
        </View>
    );
};



/* export const RegisterFormScreen = ({ navigation }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [dateOfBirth, setDateOfBirth] = useState(new Date ());
        const [gender, setGender] = useState('');
        const [showDatePicker, setShowDatePicker] = useState(false);




    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario registrado:', userCredential.user);
                navigation.navigate('Pets');
            })
            .catch((error) => {
                Alert.alert('Error al registrar el usuario');
                console.error('Error al registrar:', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de Nacimiento"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />
            <TextInput
                style={styles.input}
                placeholder="Género"
                value={gender}
                onChangeText={setGender}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
*/

