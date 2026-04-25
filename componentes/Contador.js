import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <View>
            <Text>Contador: {contador}</Text>


            <Button
                title="Sumar"
                onPress={() => setContador(contador + 1)}
            />

            <Button
                title="Restar"
                onPress={() => {
                    if( contador > 0) {
                        setContador(contador - 1)
                    }
                    
                }
                }
            />

            <Button
                title="Resetear"
                onPress={() => setContador(0)}
            />
        </View>
    );
}

