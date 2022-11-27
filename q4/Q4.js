import { StyleSheet, Text, View, Button } from 'react-native';

const Q4 = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text style={styles.text}>Elena, Karla, and Faye are playing a card game where they score points. 
        Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. 
        The sum of their three scores is 114. Who scores more points, Karla or Faye?
      </Text>
      
      <Text style={styles.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Guess the number of points and see if it works."
        onPress={()=>{
            props.navigation.navigate("Q4ex1")
        }}
      />

      <Button
        title="Write equations to solve the problem."
        onPress={()=>{
            props.navigation.navigate("Q4ex2")
        }} 
      />

      <Button
        title="Use a diagram to try and understand the problem."
        onPress={()=>{
            props.navigation.navigate("Q4ex3")
        }} 
      />      

        <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q4estimation")
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

export default Q4;