import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProductListPage.style';

const ProductListPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product List Page</Text>
    </View>
  );
};

export default ProductListPage;