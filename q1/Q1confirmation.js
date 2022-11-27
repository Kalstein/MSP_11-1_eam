import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q1confirmation = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text style={styles.text}>Ok! If you’re 
right, then Todd
bought 11 pictures.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q1")
      }}
    />
    </View>);
}

const styles = StyleSheet.create({
  text: {
    backgroundColor:'#ffaec8',
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 80,
  }
});

export default Q1confirmation;