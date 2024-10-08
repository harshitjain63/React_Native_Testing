import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Skeleton = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getApiData();

    const intervalId = setInterval(() => {
      getApiData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const renderSkeleton = () => {
    const skeletonItems = Array.from({length: 6});
    return (
      <View>
        <SkeletonPlaceholder highlightColor="#f2f8fc">
          <View style={styles.skeletonContainer}>
            {skeletonItems.map((_, index) => (
              <View key={index} style={styles.skeletonText} />
            ))}
          </View>
        </SkeletonPlaceholder>
      </View>
    );
  };

  const renderItem = ({item}: {item: Post}) => (
    <View style={styles.container}>
      <Text style={styles.txt}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <View style={loading ? styles.wrapperLoading : styles.wrapperLoaded}>
      {loading ? (
        renderSkeleton()
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLoading: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  wrapperLoaded: {
    padding: 20,
    backgroundColor: '#fff',
  },
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  skeletonContainer: {
    marginBottom: 10,
    marginVertical: 8,
  },
  skeletonText: {
    width: '100%',
    height: 110,
    borderRadius: 4,
    marginBottom: 35,
    borderBottomWidth: 1,
  },
});

export default Skeleton;
