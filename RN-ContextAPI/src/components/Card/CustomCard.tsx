import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './CustomCard.style';
import Product from '../../data/Product';

type Props = {
  product: Product;
};

const CustomCard: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={product.img} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.productName}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

export default CustomCard;
