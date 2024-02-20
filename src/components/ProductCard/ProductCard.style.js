import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#bdbdbd",
        backgroundColor:"#e0e0e0",
        margin:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:"contain",
        backgroundColor:"white"
    },
    body_container:{
        flex:1,
        padding:8,
        justifyContent:"space-between",
    },
    title:{
        fontWeight:"bold",
        color:"#000000",
        fontSize:16
    },
    price:{
        textAlign:"right",
        fontSize:16,
        fontStyle:"italic",
        color:"#000000",
    }

});