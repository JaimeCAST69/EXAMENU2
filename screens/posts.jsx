import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, SectionList, StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";

Posts = () =>{

    const navigation= useNavigation();
    const [modal, setModalVisible] = useState(false);

    const posts = [
        {
            Image: require("../assets/cena.jpg"), description: "wazaaaaaa", 
            likes: 0, username: "jaime", userimage: require("../assets/po.jpg")
        },
        {
            Image: require("../assets/brawl.jpg"), description: "no se algo", 
            likes: 10, username: "isai", userimage: require("../assets/po.jpg")
        },
        
    ];

    const [postsH, setPosts] = useState(posts);
    const [likes, setLikes] = useState(0);



    const likePost = (item) =>{
        item.likes ++;
        console.log(item.likes);
        setLikes(item.likes);
    }

    const goToUser = (item) =>{
        navigation.navigate('Profile', {item})
    }

    return(
        <View style={styles.container}>
            <View>
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
                            <MaterialIcons name='heart' size={24} color="black"/>
                            </TouchableOpacity>
                            <Text style={
                                {justifyContent: 'center', fontSize: 15, alignSelf: 'center', }
                            }>{item.likes} Personas le gusta</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={{
                                justifyContent: 'center', fontSize: 15, alignSelf: 'center', fontWeight: 'bold', color:'white'
                            }}>{item.username} </Text>
                            <Text style={{
                                justifyContent: 'center', fontSize: 15, alignSelf: 'center'
                            }}>{item.description}</Text>
                        </View>
                    </View>
                )}/>
            </View>
            <StatusBar barStyle={"light-content"}
            backgroundColor="#089779"/>

        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    cardPost: {
        flex: 1,
        backgroundColor: "#ecdbce", 
        width: 'auto', 
        height: 'auto',
        margin: 10,
    },
    profilePhoto:{
        width: 50,
        height: 50,
        borderRadius: 25,
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
    description:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3
    }
})

export default Posts;