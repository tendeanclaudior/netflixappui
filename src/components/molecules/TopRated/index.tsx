import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardView from './CardView';

const TopRated = () => {
  const [dataTopRated, setTopRated] = useState();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTY2ZDk2YjEwYWYzMGVhN2QzODNiZWY1ZTJmZmIxMSIsInN1YiI6IjYxOTljNmI3MjcxNjcxMDA0M2U3NGJjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgekK5oWcG2pQXTTzWYUAhrWebQAXPHjCE6oYy5meDU',
    },
  };

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        options,
      )
      .then(res => {
        setTopRated(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.titleTopRated}>Top Rated</Text>
      <FlatList
        data={dataTopRated}
        keyExtractor={(item, index) => 'key' + index + item}
        renderItem={({item}) => <CardView item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopRated;

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
  },
  titleTopRated: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
});
