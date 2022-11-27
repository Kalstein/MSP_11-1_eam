import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q1ex1 = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

    
    <Text style ={styles.text}>
      OK. Using p to represent the number of pictures, write an equation that represents how p, $7.50 per picture, and the $3.25 shipping fee combine to make $85.75
    </Text>
    <TextInput style = {styles.textView}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q1exex1")
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
    text: {
      backgroundColor:'#ffaec8',
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 80,
    }
  });

  export default Q1ex1;