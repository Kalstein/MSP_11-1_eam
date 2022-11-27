import { StyleSheet, Text, View, Button } from 'react-native';

const Q1 = (props) => {
    return(
    <View style ={{
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text style={styles.text}>Todd orders pictures from a photographer. Each picture costs $7.50.
A one-time shipping fee of $3.25 is added to the cost of the order.
The total cost of Todd’s order before tax is $85.75.

How many pictures did Todd order?</Text>
      
      <Text style={styles.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Write an equation to solve the problem"
        onPress={()=>{
            props.navigation.navigate("Q1ex1")
        }}
      />

      <Button
        title="Add on the shipping fee until I get to $85,75."
        onPress={()=>{
            props.navigation.navigate("Q1ex2")
        }} 
      />

      <Button
        title="Subtract away from $85,75 until I get to O."
        onPress={()=>{
            props.navigation.navigate("Q1ex3")
        }} 
      />      

      <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q1estimation")
        }} 
      />
    </View>);
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView:{
    backgroundColor:'#ffb30e',
    marginBottom: 50
  },
  generator:{
    backgroundColor:'Blue Violet',
    padding:5,
    alignItems:'center',
    width:'100%'
  },
  buttonView:{
    height: 50,
    Color: 'red',
    marginTop: 20,
    fontSize: 20,
    width:45
  },
  text:{
    backgroundColor:'#c4ff0e',
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 80,
  }
});

export default Q1;