import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q3confirmation = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text>Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q3")
      }}
    />
    </View>);
}

export default Q3confirmation;