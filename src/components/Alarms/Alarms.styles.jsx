import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    cardContainer:{
        width:'100%',
        marginTop:'3%',
        textAlign:'justify'
             
    },
    titleText:{
        flex:1.2,
        textAlign:'center',
        marginRight:20,        
    },
    scrollViewContent:{
        marginLeft: '5%',
        width:'90%',
        marginHorizontal:20,
    },
    bottomButton: {
        width: 'auto'
    },
})