import { StyleSheet, Text, View, Button } from 'react-native';

const Q2 = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text>Jen wants to run a total of 22 miles in five days. 
        The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. 
        How many miles must Jen run on Friday to reach her goal?
      </Text>
      
      <Text style={styles.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Add up her miles and then find out how many more she needs to get to 22 miles."
        onPress={()=>{
            props.navigation.navigate("Q2ex1")
        }}
      />

      <Button
        title="Write an equation to solve it."
        onPress={()=>{
            props.navigation.navigate("Q2ex2")
        }} 
      />

      <Button
        title="Subtract her miles from 22 and see how many are left."
        onPress={()=>{
            props.navigation.navigate("Q2ex3")
        }} 
      />

      <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q3")
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
    backgroundColor:'orange',
    marginBottom: 10
  },
  generator:{
    backgroundColor:'Blue Violet',
    padding:5,
    alignItems:'center',
    width:'100%'
  }
});

export default Q2;