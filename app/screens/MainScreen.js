import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ImgBlock } from '../components/ImgBlock';
import { loadImages } from '../store/actions/imageActions';

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const allImages = useSelector((state) => state.image.allImages);

  const openPhoto = (img) => {
    navigation.push('Photo', { author: img.author, uri: img.image });
  };

  const renderItem = ({ item }) => <ImgBlock img={item} onOpen={openPhoto} />;

  return (
    <View style={styles.main}>
      <FlatList
        data={allImages}
        renderItem={renderItem}
        keyExtractor={(img) => img.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white'
  }
});
