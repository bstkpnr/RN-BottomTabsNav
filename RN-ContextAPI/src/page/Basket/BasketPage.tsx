import React from 'react';
import {Text, View} from 'react-native';
import styles from './BasketPage.style';

const BasketPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basket Page</Text>
    </View>
  );
};

export default BasketPage;