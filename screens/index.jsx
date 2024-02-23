import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,SectionList,Modal, ScrollView } from "react-native";

const Index =()=>{
    const [modal, setModalVisible] = useState(false);

    const posts = [
        {
            Image: require("../assets/cena.jpg"), description: "wazaaaaa", 
            likes: 0, username: "javoer", userimage: require("../assets/cena.jpg")
        },
        {
            Image: require("../assets/angrybirds.jpg"), description: "nose cdddd", 
            likes: 10, username: "isai", userimage: require("../assets/angrybirds.jpg")
        },
        {
            Image: require("../assets/jett.jpg"), description: "wazaaaaaa", 
            likes: 10, username: "peru gano", userimage: require("../assets/fortnite.jpg")
        },
        {
            Image: require("../assets/po.jpg"), description: "ostia", 
            likes: 10, username: "perez", userimage: require("../assets/showmas.jpg")
        },
        
    ];

    const [postsH, setPosts] = useState(posts);
    const [likes, setLikes] = useState(0);

    const likePost = (item) =>{
        item.likes ++;
        console.log(item.likes);
        setLikes(item.likes);
    }


    return(
        
        <View style={styles.container}>
            
            <View style={styles.navbar}>
            <Image 
                    source={{uri: 'https://thumbs.dreamstime.com/b/logotipo-de-texto-instagram-vectorial-fuente-silueta-negra-aislada-m%C3%A1s-reciente-para-aplicaciones-m%C3%B3viles-o-materiales-204012277.jpg'}} 
                    style={styles.logo} 
                />
                <Image 
                    source={require("../assets/imagen.jpg")} 
                    style={styles.logo2} 
                />
            </View>

                <View style={{backgroundColor: 'black', height: 100}}>
                    <SectionList 
                    horizontal
                      sections={[{ title: "Perfiles", data: postsH }]}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({ item }) => {
                        return (
                          <View style={styles.perfilUser}>
                            <Image style={styles.profilePhotoNav} source={item.userimage} />
                          </View>
                        );
                      }}
                    /> 
                </View>

                <SectionList
                    sections={
                        [
                            {title: "Posts", data: postsH}
                        ]
                    }
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (
                        <View style={styles.cardPost}>
                            <TouchableOpacity onPress={() => goToUser(item)}>
                                <View style={styles.userInfo}>
                                    <Image source={item.userimage} style={styles.profilePhoto}/>
                                    <Text style={styles.username}>{item.username}</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Image style={styles.postImage} source={item.Image}/>
                            </View>
                            <View style={styles.icons}>
                                <TouchableOpacity onPress={ () => likePost(item)}>
                                    <MaterialIcons name="favorite-border" size={36} color="white"/>
                                </TouchableOpacity>
                            <MaterialIcons name="comment" size={36} color="white" />
                            <MaterialIcons name="send" size={36} color="white" />
                            
                            </View>
                            <Text style={
                                   {justifyContent: 'center', fontSize: 15, color:'white'}
                                }>{item.likes} Personas le gusta</Text>
                            <View style={styles.description}>
                                <Text style={{
                                    justifyContent: 'center', fontSize: 15,  fontWeight: 'bold', color:'white'
                                }}>{item.username} </Text>
                                <Text color={'white'} style={{
                                    justifyContent: 'center', fontSize: 15, color:'white'
                                }}>{item.description}</Text>
                            </View>
                        </View>
                    )}
                />
                
       
            
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'black'
    },
    navbar: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent:'space-between', 
        backgroundColor: 'black', 
        height: 60, 
        marginTop:30 
 
    },
    logo: {
        width: 100, 
        height: 40, 
        marginLeft: 10,
        resizeMode:'contain' 
    },
    logo2: {
        width: 100, 
        height: 50,
        marginRight: 10,
        resizeMode:'contain' 
    },
    texto:{
        fontSize: 15,
        margin: 10,
    },
    cardPost: {
        flex: 1,
        backgroundColor: "black", 
        width: 'auto', 
        height: 'auto',
        margin: 10,
    },
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    profilePhoto:{
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    profilePhotoNav:{
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 5
    },
    username:{
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 3
    },
    postImage:{
        width: 'auto',
        height: 200,
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgb(161 161 161)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      }
});

export default Index;
