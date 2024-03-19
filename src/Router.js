import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

const Stack = createNativeStackNavigator();

function Router(){

    const userSession = useSelector(s=>s.user);
    const isAuthLoading = useSelector(s=>s.isAuthLoading);

    return(
        <NavigationContainer> 
                {isAuthLoading?(
                    <Loading/>
                ): !userSession ? (
                    <Stack.Navigator>
                        <Stack.Screen name="LoginPage" component={Login} options={
                            {headerShown:false}
                        }
                        />
                    </Stack.Navigator>
                    ):(
                        <Stack.Navigator>
                            <Stack.Screen name="ProductPage" component={Products} options={{
                                title:"STORE",
                                headerStyle:{backgroundColor:"#755CB6"},
                                headerTitleStyle:{color:"white", },
                                headerTitleAlign:"center"
                                }} 
                            />
                            <Stack.Screen name="DetailPage" component={Details} options={{
                                title:"DETAILS",
                                headerStyle:{backgroundColor:"#755CB6"},
                                headerTitleStyle:{color:"white", },
                                headerTitleAlign:"center",
                                headerTintColor:"white",
                                }}
                            /> 
                        </Stack.Navigator>
                    )}
        </NavigationContainer>
    )
}

export default Router;