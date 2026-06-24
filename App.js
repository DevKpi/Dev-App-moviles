// import AppNavigation from './src/navigation/AppNavigation';

// import HomeScreen from './src/screens/HomeScreen';
// import PerfilScreen from './src/screens/PerfilScreen';

import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ToDoAS from './componentes/ToDoAS';

export default function App() {
  
  // const [nombre, setNombre] = useState('');
  // const [mensaje, setMensaje] = useState('Escribe tu nombre y guardalo localmente.');


  // const guardarNombre = async () => {
  //   const valor = nombre.trim();


  //   if (!valor) {
  //     setMensaje('Escribe un nombre antes de guardar.');
  //     return;
  //   }


  //   await AsyncStorage.setItem('nombre', valor);
  //   setMensaje('Nombre guardado correctamente.');
  // };


  // const cargarNombre = async () => {
  //   const valor = await AsyncStorage.getItem('nombre');


  //   if (!valor) {
  //     setMensaje('No hay nombre guardado.');
  //     return;
  //   }


  //   setNombre(valor);
  //   setMensaje('Nombre cargado desde almacenamiento local.');
  // };
  
  return (
    // <AppNavigation />


    <ToDoAS />

    // <View style={styles.container}>
    //   <Text style={styles.title}>Ejemplo de AsyncStorage</Text>


    //   <TextInput
    //     placeholder="Escribe tu nombre"
    //     value={nombre}
    //     onChangeText={setNombre}
    //     style={styles.input}
    //   />


    //   <View style={styles.buttonsRow}>
    //     <View style={styles.buttonWrapper}>
    //       <Button title="Guardar" onPress={guardarNombre} />
    //     </View>


    //     <View style={styles.buttonWrapper}>
    //       <Button title="Cargar" onPress={cargarNombre} />
    //     </View>
    //   </View>


    //   <Text style={styles.message}>{mensaje}</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  message: {
    textAlign: 'center',
    color: '#374151',
    fontSize: 14,
  },
});