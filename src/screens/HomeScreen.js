import { View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }) {


    return (
        <View>


            <Text>Home Screen</Text>


            <Button
                title="Ir a Perfil"
                onPress={() => navigation.navigate('Perfil')}
            />


        </View>
    );
}
