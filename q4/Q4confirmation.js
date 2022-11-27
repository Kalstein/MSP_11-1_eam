import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q4confirmation = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text style={styles.text}>Ok! It looks like Faye scored the most.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4")
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

export default Q4confirmation;