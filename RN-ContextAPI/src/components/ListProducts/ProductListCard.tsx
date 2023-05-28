import React from 'react';
import {Text, View,FlatList} from 'react-native';
import styles from './ProductListCard.style'
import Product from '../../data/Product';
import CustomCard from '../Card/CustomCard';


interface ProductListProps{
  products:Product[];
}

const ProductListCard: React.FC<ProductListProps> = ({products}) => {
  const renderItem=({item}:{item:Product})=><CustomCard product={item} />
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderItem} keyExtractor={(item)=>item.id.toString()} />
    </View>
  );
};

export default ProductListCard;