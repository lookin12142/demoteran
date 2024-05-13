import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const RegisterFormScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');

    const auth = getAuth(); // Obteniendo el objeto de autenticación de Firebase

    const handleRegister = () => {
        // Validar que los campos no estén vacíos
        if (!email || !password || !firstName || !lastName || !dateOfBirth || !gender) {
            Alert.alert('Todos los campos son requeridos');
            return;
        }

        // Crear el usuario en Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Usuario creado exitosamente
                console.log('Usuario registrado:', userCredential.user);
                navigation.navigate('Pets');
            })
            .catch((error) => {
                // Si hay un error, mostrar mensaje de error
                Alert.alert('Error al registrar el usuario');
                console.error('Error al registrar:', error);
            });
    };

    // Función para formatear la fecha de nacimiento con barras o guiones
    const formatDOB = (dob) => {
        // Reemplazar los guiones por barras
        dob = dob.replace(/-/g, '/');
        // Separar la fecha en partes por las barras
        const parts = dob.split('/');
        // Si hay menos de 3 partes, no es una fecha completa
        if (parts.length < 3) return dob;
        // Formatear la fecha como dd/mm/yyyy
        return parts[2] + '/' + parts[1] + '/' + parts[0];
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
                placeholder="Fecha de Nacimiento (dd/mm/yyyy)"
                value={formatDOB(dateOfBirth)}
                onChangeText={(text) => setDateOfBirth(formatDOB(text))}
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

export default RegisterFormScreen;
