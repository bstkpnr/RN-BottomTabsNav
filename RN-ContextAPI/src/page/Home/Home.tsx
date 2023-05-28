import React from 'react';
import {ImageBackground, Text, View,TouchableOpacity} from 'react-native';
import styles from './Home.style';
import CustomIcon from '../../components/Icon/CustomIcon';
import Colors from '../../utils/color';
import { Navigation } from '../../utils/types';
import routes from '../../routes/ROUTES';


type Props = {
  navigation: Navigation;
};

const HomePage: React.FC <Props>= ({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../img/styling2.jpg')}
        style={styles.imgbackground}>

        <Text style={styles.text}>BESTCOM</Text>
<TouchableOpacity onPress={()=>navigation.navigate(routes.PRODUCTLIST)}>
        <View style={styles.productTextContainer}>
  
      <CustomIcon name='arrow-right' iconSet='FontAwesome5' size={16} />
      <Text style={styles.productText}>Ürünleri Gör</Text>
        </View>
</TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomePage;
