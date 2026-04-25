import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tarea({ texto, completada, onBorrar, onCompletar }) {
    return (
        <View style={styles.item}>
            {/* El Text aplica textoCompletado solo si completada es true */}
            <Text style={[styles.texto, completada && styles.textoCompletado]}>
                {texto}
            </Text>
            
            {/* Agrupamos los botones para que el space-between del padre no los separe entre sí */}
            <View style={styles.botonesContenedor}>
                <Button 
                    title={completada ? "Deshacer" : "Completar"} 
                    color="green" 
                    onPress={onCompletar} 
                />
                
                {/* Espaciador invisible para separar los botones */}
                <View style={styles.espaciador} />
                
                <Button 
                    title="Eliminar" 
                    color="red" 
                    onPress={onBorrar} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // margin: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    texto: {
        flex: 1, // Toma todo el espacio disponible, empujando los botones a la derecha
        marginRight: 15, // Garantiza una separación de 15 píxeles con el contenedor de botones
        fontSize: 16,
        color: 'black',
    },
    textoCompletado: {
        color: 'gray',
        textDecorationLine: 'line-through', // Efecto de tachado
    },
    botonesContenedor: {
        flexDirection: 'row', // Coloca los botones en fila
        alignItems: 'center',
    },
    espaciador: {
        width: 10, // Define la distancia entre el botón Completar y Eliminar
    }
});