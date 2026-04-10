import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Saludo from './componentes/Saludo';
import Perfil from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      <Saludo nombre="Thiago"/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Presioname" onPress={() => alert("Hola desde la app")} />
      <Perfil nombre="Ana" edad={20} /> 

      <Perfil nombre="Juan" edad={25} />
      <Perfil nombre="Lucía" edad={30} /> 

    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});