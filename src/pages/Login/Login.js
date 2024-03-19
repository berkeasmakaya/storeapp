import React from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UseDispatch, useDispatch } from 'react-redux';

const Login = ({navigation}) => {
  
    const {data, post, loading, error} = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
      post(Config.API_AUTH_URL  + "/login", values);
    }

    if(error){
      Alert.alert("Store", "An Error Occured!")
    }

    if (data) {
      if (!loading && error) {
        switch (error.response.status) {
          case 401:
            Alert.alert("Store", "User Not Found!")
            break;
          default:
            break;
        }
      }
      else{
        dispatch({type:"SET_USER", payload:{user:JSON.stringify(user)}})
      }
    }
    
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/login-logo.png")} />
      </View>

      <Formik initialValues={{username:'', password:''}} onSubmit={handleLogin} >
        {({handleSubmit, handleChange, values}) => (
        <View style={styles.body_container}>
            <Input placeholder="Username..." value={values.username} onChangeText={handleChange('username')} iconName={"account"} />
            <Input placeholder="Password..." value={values.password} onChangeText={handleChange('password')} iconName={"key"} isSecure={true} />
            <Button text="LOGIN" onPress={handleSubmit} loading={loading} />
        </View>
        )}
      </Formik>
      
    </SafeAreaView>
  )
}

export default Login;

const user = {
  "address": {
    "geolocation": {
      "lat": "-37.3159",
      "long": "81.1496"
    },
    "city": "kilcoole",
    "street": "new road",
    "number": 7682,
    "zipcode": "12926-3874"
  },
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "name": {
    "firstname": "john",
    "lastname": "doe"
  },
  "phone": "1-570-236-7033",
  "__v": 0
}