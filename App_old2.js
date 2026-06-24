import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'; // Importaciones necesarias

import Card from './componentes/Card';
// import { styles } from './styles/theme';


const contactos = [
  { nombre: 'Esteban', telefono: 123456, email: 'esteban@gmail.com'},
  { nombre: 'Matias', telefono: 135678, email: 'mati@gmail.com'},
  { nombre: 'Fabrizio', telefono: 146789, email: 'fabri@gmail.com'},
];

// export default function App() {
//   return (
//       <Card titulo = "Test" descripcion = "Test" precio = {50} 
//       linkimg = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSW2kiJGjLg3dLM37fJQfoTzsSHyf7fyL8SSx6FjaYw&s'}
//       />  
//   );
// }

export default function App() {
  return (

    <View style={styles.container}>
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.telefono}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text >{item.telefono}</Text>
            <Text>{item.email}</Text>
          </View>
        )}

      />
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },


    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        elevation: 3,
    },


    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});