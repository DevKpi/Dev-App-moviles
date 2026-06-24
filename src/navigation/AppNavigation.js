import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
return (
    <NavigationContainer>


      <Stack.Navigator>


        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />


        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />


      </Stack.Navigator>


    </NavigationContainer>
    );
}