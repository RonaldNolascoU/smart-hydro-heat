import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:'20%',
    textAlign:'center',
    fontSize: 50
  },
  cardContainer: {
    width: '100%',
    height:'50%',
    marginTop: '3%',

  },
  form:{
    marginTop:'5%',
    marginLeft:'5%',
    width:'90%',
  },
  bottomButtons:{
    flexDirection:'row',
    marginTop:'10%',
    justifyContent:'space-around',
    padding:50
  }

})