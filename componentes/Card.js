import { Text, Image, TouchableOpacity, View,  } from 'react-native';
import { styles } from '../styles/theme';


export default function Card({titulo, descripcion, linkimg, precio}) {
  return(
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={{
            //uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSW2kiJGjLg3dLM37fJQfoTzsSHyf7fyL8SSx6FjaYw&s',
            uri : linkimg,
          }}
          style={styles.image}
          resizeMode="cover"
        />


        <View style={styles.content}>
          <Text style={styles.badge}>Nuevo</Text>
          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.description}>
            {descripcion}
          </Text>


          <View style={styles.footer}>
            <Text style={styles.price}>${precio}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}