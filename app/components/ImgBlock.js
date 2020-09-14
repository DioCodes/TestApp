import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const ImgBlock = ({ img, onOpen }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity activeOpacity={0.75} onPress={() => onOpen(img)}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: img.thumb
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{img.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    maxWidth: 120,
    marginHorizontal: 10,
    marginBottom: 20
  },
  imageContainer: {
    height: 120,
    borderRadius: 10
  },
  image: {
    flex: 1,
    borderRadius: 10
  },
  textContainer: {
    marginTop: 10
  },
  text: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, .5)'
  }
});
