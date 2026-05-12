import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'; // Importaciones necesarias

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
    // <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.card}>
          <Image
            source={{
              uri: '',
            }}
            style={styles.image}
            resizeMode="cover"
          />


          <View style={styles.content}>
            <Text style={styles.badge}>Nuevo</Text>
            <Text style={styles.title}>Auriculares Inalámbricos</Text>
            <Text style={styles.description}>
              Sonido premium, batería de larga duración y diseño cómodo para todo el día.
            </Text>


            <View style={styles.footer}>
              <Text style={styles.price}>$89.99</Text>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 360,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 14,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#d9f5e5',
    color: '#0a7d48',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  description: {
    marginTop: 8,
    color: '#6b7280',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  button: {
    backgroundColor: '#0f766e',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});