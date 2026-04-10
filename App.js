import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Saludo from './componentes/Saludo';
import Alert from './componentes/Alert';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo nombre="Thiago"/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Presioname" onPress={() => alert("Hola desde la app")} />
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