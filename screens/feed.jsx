import React, { useState } from 'react';
import { View, SectionList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Posts = ({ posts, likePost }) => {

  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ title: "Posts", data: posts }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardPost}>
              <TouchableOpacity>
                <View style={styles.userInfo}>
                  <Image style={styles.profilePhoto} source={item.userimage} />
                  <Text style={styles.userName}>{item.username}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Image style={styles.postImage} source={item.image} />
              </View>
              <TouchableOpacity onPress={() => likePost(item)}>
                <Text style={styles.likes}>{item.likes} Personas les gusta</Text>
              </TouchableOpacity>
              <View style={styles.description}>
                <Text>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPost: {
    backgroundColor: "#d5b39a",
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  userName: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  }
});

export default Posts;
