import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    flex:1, flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

   
  },
  text: {
    color:Colors.defaultBlackColor,
    fontSize: 53,
    textAlign: 'center',
    fontFamily:'Roboto-Regular',
    fontWeight:'bold',
    top:284
  },
  imgbackground:{
    width:'100%',height:'100%',
    flex:1,
    backgroundColor: Colors.defaultWhiteColor,
    opacity: 0.55,
  },
  productTextContainer:{
    display:'flex',
    flexDirection:'row',
    top:640,
    justifyContent:'center'
  },
  productText:{
    fontSize:16,
    color:Colors.defaultBlackColor,
    fontFamily:'Roboto-Regular',
    fontWeight:'bold'
  }
});