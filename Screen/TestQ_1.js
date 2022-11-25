import {View, Button, Text} from 'react-native';
import Goto from '../Util/Navigate';

const TestQ_1 = (props) => {
    return(
        <View>
            <Text>Q1test screen\n</Text>
            <Button title = 'go to test2' onPress={()=>{
                props.navigation.navigate("test2")
            }}></Button>
            
        </View>

    );
}

export default TestQ_1;