import React, { useLayoutEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

export const PhotoScreen = ({ route, navigation }) => {
  const { author } = route.params;
  const { uri } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: author
    });
  }, [author, navigation]);

  return <Image style={styles.img} source={{ uri }} />;
};

const styles = StyleSheet.create({
  img: {
    flex: 1
  }
});
