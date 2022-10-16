import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tilte: {
        backgroundColor:"#49001e",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderRadius: 20,
        alignItems: "center",
        
    },
    imageTitle: {
        width:250,
        height: 250,
        borderRadius: "100%",
    },
    imageView: {
        margin: 20,
        width: 270,
        height: 270,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#000000",
        borderRadius: "100%",
    },
    viewText:{
        padding:10,
    },
    textName: {
        fontSize:28,
        color: "#ff5c29",
    },
    textView: {
        flexDirection:"row",
        padding: 10,
        display:"flex",
        alignItems: "center",
    },
    textA: {
        paddingLeft: 10,
        textDecorationLine:"none",
        color: "#ff5c29",
        justifyContent: "center",
        
    },
    imageIcon: {
        width: 30,
        height: 30,
        
    }
});

export default styles