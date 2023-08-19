import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type propsItem = {
  poster_path: string;
  title: string;
};

type Props = {
  item: propsItem;
};

const CardView = ({item}: Props) => {
  // agar dapat memanggil image, bawaan dari documentation API
  const getImage = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <View style={styles.cardView}>
      <Image source={{uri: getImage(item.poster_path)}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  page: {},
  cardView: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 5,
    marginTop: 15,
  },
  title: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
