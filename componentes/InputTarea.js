import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


export default function InputTarea({ onAgregar }) {
    const [texto, setTexto] = useState('');


    return (
        <View style={styles.buttonAndInput}>
            <TextInput
                placeholder="Nueva tarea"
                value={texto}
                onChangeText={setTexto}
            />


            <Button
                title="Agregar"
                onPress={() => {
                    onAgregar(texto);
                    setTexto('');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonAndInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // margin: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    }
});
