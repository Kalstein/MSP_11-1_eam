import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q2confirmation = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text style={styles.text}>Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2")
      }}
    />
    </View>);
}
const styles = StyleSheet.create({
  text:{
    backgroundColor:'#ffaec8',
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 80,
  }
});

export default Q2confirmation;