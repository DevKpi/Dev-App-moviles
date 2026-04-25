import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

export default function InputDyn() {
    const [texto, setTexto] = useState('');
    return (
        <View>
            <TextInput 
            placeholder = "Ingrese un texto"
            value = {texto}
            onChangeText={setTexto}
            />

            <Text>Texto ingresado: {texto}</Text>
        </View>
    );
}

