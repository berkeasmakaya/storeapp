import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";

const Stack = createNativeStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductPage" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;