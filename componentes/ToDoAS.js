import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles/todo-theme';


// Clave unica para guardar y leer la lista desde AsyncStorage.
const STORAGE_KEY = 'lista_tareas';


export default function ToDoAS() {
  // Estados
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);
  // Evita guardar antes de terminar la carga inicial desde almacenamiento.
  const [hidratado, setHidratado] = useState(false);




  // Carga inicial: recupera tareas guardadas.
  useEffect(() => {
    // Se ejecuta una sola vez al montar la app: recupera tareas guardadas.
    cargarTareas();
  }, []);


  // Se ejecuta cada vez que cambia la lista o el estado de hidratacion: guarda cambios.
  useEffect(() => {
    // Se ejecuta cuando cambia la lista: persiste los cambios automaticamente.
    guardarTareas();
  }, [listaTareas, hidratado]);


  // Carga la lista de tareas desde AsyncStorage al iniciar la app.
  const cargarTareas = async () => {
    try {
      const tareasGuardadas = await AsyncStorage.getItem(STORAGE_KEY);


      if (tareasGuardadas) {
        setListaTareas(JSON.parse(tareasGuardadas));
      }


    } catch (error) {
      console.error('Error al cargar tareas:', error);
    } finally {
      setHidratado(true);
    }
  };


  // Guarda la lista actual en AsyncStorage. Solo se llama después de cargar inicialmente.
  const guardarTareas = async () => {
    if (!hidratado) {
      // Si aun no terminamos de cargar, no escribimos nada.
      return;
    }


    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listaTareas));
    } catch (error) {
      console.error('Error al guardar tareas:', error);
    }
  };


  // Agregar Tarea
  const agregarTarea = () => {
    if (tarea.trim()) {
      setListaTareas([...listaTareas, { id: Date.now().toString(), texto: tarea, completada: false }]);
      setTarea('');
    }
  };




  // Eliminar Tarea
  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter((item) => item.id !== id));
  };




  // Marcar como completada
  const alternarCompletada = (id) => {
    setListaTareas(
      listaTareas.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
  };




  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Tareas ✅</Text>




      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea..."
        value={tarea}
        onChangeText={setTarea}
      />




      <Button title="Agregar Tarea" onPress={agregarTarea} />




      <FlatList
        data={listaTareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Toque corto: completar; toque largo: eliminar.
          <TouchableOpacity
            style={[styles.tarea, item.completada && styles.tareaCompletada]}
            onPress={() => alternarCompletada(item.id)}
            onLongPress={() => eliminarTarea(item.id)}
          >
            <Text style={styles.textoTarea}>{item.texto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}




