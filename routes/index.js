import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/Login' 
import SignUp from '../screens/SignUp' 
import TabRoutes from './TabRoutes'

const Stack = createNativeStackNavigator();

export default function Routes(){
return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
   <Stack.Screen name="login" component={Login}/>
<Stack.Screen name="SignUp" component={SignUp}/>
   <Stack.Screen name="TabRoutes" component={TabRoutes}/>   
  </Stack.Navigator>
);
}