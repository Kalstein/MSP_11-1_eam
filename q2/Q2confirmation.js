import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const Q2confirmation = (props) => {
    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text>Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2")
      }}
    />
    </View>);
}

export default Q2confirmation;