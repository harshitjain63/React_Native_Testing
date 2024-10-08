import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Skeleton from './components/Skeleton';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Skeleton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
});

export default App;
