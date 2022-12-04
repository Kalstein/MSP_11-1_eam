import { StyleSheet } from "react-native";  //스타일링 코드

const Qstyle = StyleSheet.create ({

    Qtext : {         //텍스트 스타일링
        marginTop : 12,
        padding: 12,
        borderRadius: 8,
        color: "#666",
        backgroundColor: "#eaeaea",
        fontWeight: "bold"

    },
    subView:{       //서브 텍스트 스타일링
        marginTop: 20,
        backgroundColor:'#ffb30e',
        marginBottom: 35,
    },
    mainView: {     //메인 테마 스타일링
        flex:1,
        backgroundColor: '#FFFACD',
        alignItems:'center',
        justifyContent:'center'

    },

    ImageView: {
        width: 400,
        height: 400,

    },

    input : {
        width: '80%',
        backgroundColor : "#cecece",
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        padding: 10,
    },

    EndView : {
        fontSize: 70,
        marginTop: 80,
        marginBottom: 50,
        fontWeight: "bold",
    },

    textView: {
        width: "95%",
        margin: 15,
        height: 40,
        borderColor: "#7a42f4",
        borderWidth: 1
    },
});

export default Qstyle;