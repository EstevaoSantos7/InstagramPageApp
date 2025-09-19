import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
<Tab.Navigator screenOptions={({route}) => 
    ({ headerShown:false, tabBarActiveTintColor: "#333fff" , tabBarStyle:{ backgroundColor: "#ffff"},
    tabBarIcon:({color , size }) => {
    if( route.name === "Profile"){
        return <Feather name="user" size={size} color={color} />
    }
}
})}>
    <Tab.Screen name="Profile" component={Profile}/>
</Tab.Navigator>
    );
}