
import { NavigationContainer } from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import  Index from './index'

export default function App (){
    return (
        <NativeBaseProvider>
          <NavigationContainer>                      
            <Index />
          </NavigationContainer>
        </NativeBaseProvider>
    )
}