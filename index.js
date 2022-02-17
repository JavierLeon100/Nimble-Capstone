import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Avatar} from "native-base";
import { Text, View } from 'react-native';
import TaskScreen from './src/component/screens/TaskScreen'


function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator()
const uriForImg = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

const options = {
    headerStyle : {
        height : 110,
      },
      headerTitleStyle : {
        fontSize : 20
      },
      headerRight : ()=>{
        return (
          <Avatar source={{
            url : uriForImg
          }} mr='8'/>
        )
}}


export default function(){

    return (
        <Tab.Navigator>
        <Tab.Screen name="Tasks" component={TaskScreen} 
        options={options}/>
        <Tab.Screen name="Activity" component={SettingsScreen} options={options}/>
        <Tab.Screen name="Rewards" component={SettingsScreen} options={options}/>
        </Tab.Navigator>
    )
}