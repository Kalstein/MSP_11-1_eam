import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q4ex3ex1 = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

    
    <Text style ={styles.text}>
    Ok, so the four bars represent 84 points. Then how many points did Elena score?
    </Text>
    <TextInput style = {styles.textView}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex3ex2")
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
    },
    textView: {
      width: "95%",
      margin: 15,
      height: 40,
      borderColor: "#7a42f4",
      borderWidth: 1
    },
    text:{
      backgroundColor:'#ffaec8',
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 80,
    }
  });

  export default Q4ex3ex1;