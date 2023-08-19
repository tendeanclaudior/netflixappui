import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  IconComming,
  IconHeart,
  IconHome,
  IconMenu,
  IconSearch,
  IconUnduh,
} from '../../assets';
import {NowPlaying, Popular, TopRated, UpComing} from '../../components';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(true);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FFFFFF']}
            progressBackgroundColor="#000000"
          />
        }>
        <View style={styles.container}>
          <View style={styles.navbarView}>
            <IconMenu />
            <Text style={styles.title}>NETFLIX</Text>
            <IconHeart />
          </View>
          <View style={styles.nowPlaying}>
            <NowPlaying />
          </View>
          <UpComing />
          <TopRated />
          <Popular />
        </View>
      </ScrollView>
      <View style={styles.buttomView}>
        <IconHome />
        <IconSearch />
        <IconComming />
        <IconUnduh />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    color: '#BF0006',
    fontWeight: 'bold',
  },
  navbarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nowPlaying: {
    alignItems: 'center',
  },
  buttomView: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    width: '100%',
    height: 51,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
