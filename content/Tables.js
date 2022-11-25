//https://velog.io/@dishate/React-native-Table-%EB%A7%8C%EB%93%A4%EA%B8%B0

import { StyleSheet, View, ScrollView, Text } from 'react-native';

export const heads = ['이름', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', '합'];

export const bodyDatas = [
    ['ㄱ', '1', '2', '3', '4', '4', '3', '2', '1', ''],
    ['ㄴ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㄷ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㄹ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅁ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅂ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅅ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅇ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅈ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅊ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅋ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅌ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅍ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
    ['ㅎ', '1', '2', '3', '4', '1', '1', '1', '1', ''],
];

export const tails = ['평균', "", "", "", "", "", "", "", "", ""];

const sumValue = (props) => {
    // [이름 1 2 3 4 5 6 7 8 평균]
    let sum = 0;

    for (let i = 1; i < props.length - 1; i++) {
        sum += Number(props[i]);
    }

    return sum
}

bodyDatas.map((array) => {
    array.splice(array.length - 1, 1, sumValue(array))
});

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