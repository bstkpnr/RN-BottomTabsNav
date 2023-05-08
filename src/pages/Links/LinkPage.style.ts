import { StyleSheet,Dimensions} from "react-native";
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#6C9BCF'
    
    },
    text:{
        color:'white',
        fontSize:24,
        textAlign:'center'

    
    }
})