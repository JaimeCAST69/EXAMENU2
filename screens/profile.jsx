import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , Image} from 'react-native';


Profile = () =>{

  const route = useRoute();

  const {item} = route.params ? route.params: "No hay usuarios";



  return (
    <View style={styles.container}>
      <Image
        style={styles.circulito}
        source={{
          uri: 'https://c8.alamy.com/compes/pm3dee/kung-fu-panda-po-2008-dream-works-pm3dee.jpg'
        }}
      />
      
      <Text style={styles.nombre}>{miNombre}</Text>
      <Text style={styles.correo}>Correo: {correo}</Text>
      <Text style={styles.correo}>Ubicación: {ubicacion}</Text>
      <Text style={styles.correo}>{item ? item.username: "No hay usuarios"}</Text>
    </View>
  );
}

const miNombre = 'jesus peres';
const correo = 'jesus@gmail.com';
const ubicacion = 'Xochitepec, Morelos.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    height: 100,
    padding: 20 , 
  },
  circulito:{
    height: 150,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 100,
  },
  nombre:{
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  correo:{
    color: 'gray',
    fontSize: 15,
    marginTop: 10,
  }
});

export default Profile;