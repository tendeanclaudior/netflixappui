import {Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import CardView from './CardView';

const NowPlaying = () => {
  const [dataNowPlaying, setdataNowPlaying] = useState();
  const width = Dimensions.get('window').width;

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
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options,
      )
      .then(res => {
        setdataNowPlaying(res.data.results);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <>
      <Carousel
        loop
        width={width - 100}
        height={300}
        data={dataNowPlaying || []}
        autoPlay={true}
        mode="parallax"
        scrollAnimationDuration={6000}
        renderItem={({item}) => {
          return <CardView item={item} />;
        }}
      />
    </>
  );
};

export default NowPlaying;
