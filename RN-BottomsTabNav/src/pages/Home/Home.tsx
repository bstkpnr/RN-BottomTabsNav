import React from 'react';
import {Image, View} from 'react-native';
import styles from './Home.style';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/vangogh.jpg')}
        style={{width: 400, height: '100%'}}
      />
    </View>
  );
};

export default Home;
