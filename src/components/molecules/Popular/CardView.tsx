import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

type PropsItem = {
  poster_path: string;
  title: string;
};

type Props = {
  item: PropsItem;
};

const CardView: FC<Props> = ({item}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3);
    }
    return text;
  };

  // agar dapat memanggil image, bawaan dari documentation API
  const getImage = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <View style={styles.containerView}>
      <Image source={{uri: getImage(item.poster_path)}} style={styles.image} />
      <Text style={styles.title}>{truncateText(item?.title, 20)}</Text>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginLeft: 15,
  },
  image: {
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 10,
  },
});
