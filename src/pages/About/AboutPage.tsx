import React from 'react';
import { Text, View } from 'react-native';
import styles from './About.style'

const AboutPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutPage</Text>
    </View>
  );
};

export default AboutPage;