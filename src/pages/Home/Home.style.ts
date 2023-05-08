import { StyleSheet,Dimensions} from "react-native";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#AAC8A7'
    
    },
    text:{
        color:'white',
        fontSize:24
    
    }
})