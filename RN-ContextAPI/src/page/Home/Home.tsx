import React from 'react';
import {Text, View} from 'react-native';
import styles from './Home.style';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomePage</Text>
    </View>
  );
};

export default HomePage;