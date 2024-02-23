import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, Image } from "react-native"
import {  MaterialIcons } from '@expo/vector-icons';



Search = () =>{
    return(
        <View style={styles.container}>
            <View><MaterialIcons name='search1' size={24} color="black"/></View>
           <Input style={styles.input}>
            </Input>
            <View style={styles.img}>
            <Image
        style={styles.circulito}
        source={{
          uri: 'https://c8.alamy.com/compes/pm3dee/kung-fu-panda-po-2008-dream-works-pm3dee.jpg'
        }}
      />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     borderBlockColor:'blue',
     flexDirection:'row'
    },
    input: {
      borderRadius: 24,
     
    },
    img:{
        width:'auto',
        height:'200',
        backgroundColor:'blue'
    },
    circulito:{
        height: 150,
        width: 150,
        backgroundColor: 'black',
        borderRadius: 100,
      },
  });
export default Search;