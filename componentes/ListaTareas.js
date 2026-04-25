import { View } from 'react-native';
import Tarea from './Tarea';

export default function ListaTareas({ tareas, onEliminar, onCompletar }) {
    return (
        <View>
            {tareas.map(t => (
                <Tarea 
                    key={t.id} 
                    texto={t.texto} 
                    onBorrar={() => onEliminar(t.id)}
                    completada={t.completada}
                    onCompletar={() => onCompletar(t.id)} 
                />
            ))}
        </View>
    );
}