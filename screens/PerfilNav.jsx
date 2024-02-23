import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilNav = ({ userData }) => {
  return (
    <View style={styles.container}>
      <Image source={userData.userimage} style={styles.image} />
      <Text style={styles.username}>{userData.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PerfilNav;
