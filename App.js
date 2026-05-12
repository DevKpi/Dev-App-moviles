import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'; // Importaciones necesarias

import Card from './componentes/Card';
import { styles } from './styles/theme';


export default function App() {
  return (
      <Card titulo = "Test" descripcion = "Test" precio = {50} 
      linkimg = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSW2kiJGjLg3dLM37fJQfoTzsSHyf7fyL8SSx6FjaYw&s'}
      />  
  );
}