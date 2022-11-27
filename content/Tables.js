//https://velog.io/@dishate/React-native-Table-%EB%A7%8C%EB%93%A4%EA%B8%B0

import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Data from './Data'

const heads = Data.heads

const bodyDatas = Data.bodyDatas

const tails = Data.tails

let sum;

for (let i = 1; i < tails.length; i++){
    sum = 0;

    for (let j = 0; j < bodyDatas.length; j++){
        sum += Number(bodyDatas[j][i]);
    }

    tails[i] = parseFloat((sum / bodyDatas.length).toFixed(2));
}

const tablema = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View title="머리" style={[styles.row, styles.borderStyle, { backgroundColor: "#808080" }]}>
                {heads.map((head, index) => (
                    <View key={index} style={[styles.rowItem, { flexGrow: 1 }]}>
                        <Text style={[styles.rowItemText, { color: "#ffffff" }]}>{head}</Text>
                    </View>
                ))}
            </View>
            {bodyDatas.map((values, index) => (
                <View key={index} style={[styles.row, styles.borderStyle]}>
                    {values.map((value, index2) => {
                        return (
                            <View style={[styles.rowItem, { flexGrow: 1 }]} key={index2}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rowItemText}>
                                    {value}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            ))}
            <View title="꼬리" style={[styles.row, styles.borderStyle, { backgroundColor: "#808080" }]}>
                {tails.map((tail, index) => (
                    <View key={index} style={[styles.rowItem, { flexGrow: 1 }]}>
                        <Text style={[styles.rowItemText, { color: "#ffffff" }]}>{tail}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowItem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      paddingVertical: 8,
      paddingHorizontal: 4,
      height: 50,
    },
    rowItemText: { textAlign: 'center' },
    borderStyle: {
      borderBottomWidth: 1,
      borderBottomColor: "#000000",
    },
    locationButton: {
      width: 34,
      height: 34,
    },
  });

export default tablema;