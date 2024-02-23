import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Details from "./pages/Details";

const Stack = createNativeStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductPage" component={Products} options={{
                    title:"STORE",
                    headerStyle:{backgroundColor:"#755CB6"},
                    headerTitleStyle:{color:"white", },
                    headerTitleAlign:"center"
                }} />
                <Stack.Screen name="DetailPage" component={Details} options={{
                    title:"DETAILS",
                    headerStyle:{backgroundColor:"#755CB6"},
                    headerTitleStyle:{color:"white", },
                    headerTitleAlign:"center",
                    headerTintColor:"white",
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;