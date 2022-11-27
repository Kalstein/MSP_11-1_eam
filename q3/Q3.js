import { StyleSheet, Text, View, Button } from 'react-native';

const Q3 = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text style={styles.text}>Jennifer has 84.5 yards of fabric to make curtains. 
        She makes 6 identical curtains and has 19.7 yards of fabric remaining. 
        How many yards of fabric does Jennifer use per curtain?
      </Text>
      
      <Text style={styles.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Subtract the extra yards and then figure out how much fabric she used for each curtain"
        onPress={()=>{
            props.navigation.navigate("Q3ex1")
        }}
      />

      <Button
        title="Write an equation to solve it."
        onPress={()=>{
            props.navigation.navigate("Q3ex2")
        }} 
      />

      <Button
        title="Use a diagram to try and understand the problem."
        onPress={()=>{
            props.navigation.navigate("Q3ex3")
        }} 
      />      

        <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q3estimation")
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
  text:{
    backgroundColor:'#c4ff0e',
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 80,
  }
});

export default Q3;