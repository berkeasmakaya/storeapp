import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#755CB6"
    },

    logo_container:{
        flex:1,
        justifyContent:"center"
    },

    logo:{
        height:Dimensions.get("window").height/3,
        width:Dimensions.get("window").width,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:"white"
    },

    body_container:{
        flex:1
    }
});