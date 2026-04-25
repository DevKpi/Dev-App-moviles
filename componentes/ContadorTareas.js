import { View, Text, StyleSheet } from 'react-native';

export default function ContadorTareas({ total, completadas }) {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.texto}>Total: {total}</Text>
            <Text style={styles.texto}>Completadas: {completadas}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderTopWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    texto: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    }
});