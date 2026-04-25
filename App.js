import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'; // Importaciones necesarias

// Importaciones de tus componentes
import InputTarea from './componentes/InputTarea';
import ListaTareas from './componentes/ListaTareas';
import ContadorTareas from './componentes/ContadorTareas';

// Importaciones de tus otros componentes (comentadas por si las necesitas luego)
// import Saludo from './componentes/Saludo';
// import Perfil from './componentes/Perfil';
// import Contador from './componentes/Contador';
// import InputDyn from './componentes/InputDyn'
// import ToDoList from './componentes/ToDo';

export default function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    if (texto.trim() === '') return;
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const alternarCompletada = (id) => {
    setTareas(
      tareas.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

const totalTareas = tareas.length;
const completadasCount = tareas.filter(t => t.completada).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* <View style={styles.container}>
        <Saludo nombre="Thiago"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Presioname" onPress={() => alert("Hola desde la app")} />
        <Perfil nombre="Ana" edad={20} /> 
        <Perfil nombre="Juan" edad={25} />
        <Perfil nombre="Lucía" edad={30} />
        <InputDyn />
        <Contador />
      </View> 
      */}

      {/* SECCIÓN PRINCIPAL: Ocupa el espacio sobrante (flex: 1) */}
      <View style={styles.content}>
        <InputTarea onAgregar={agregarTarea} />
        
        <ScrollView style={styles.scroll}>
          <ListaTareas 
            tareas={tareas} 
            onEliminar={eliminarTarea} 
            onCompletar={alternarCompletada} 
          />
        </ScrollView>
      </View>

      {/* CONTADOR: Se mantiene al fondo porque está fuera del View con flex: 1 */}
      <ContadorTareas total={totalTareas} completadas={completadasCount} />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, // Esto es vital: empuja lo que esté debajo hacia el borde inferior
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  scroll: {
    marginTop: 20,
  }
});