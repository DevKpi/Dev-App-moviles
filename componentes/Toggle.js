import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Toggle() {
    const [tareaTexto, setTextoTarea] = useState('');
    return (
        <View>

            <Button
            title="Agendar tarea"
            onPress={() => 
                {

                }
            }
            />
            
        </View>
    );
}