import { NavigationContainer } from "@react-navigation/native";
import Routes from './routes';
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'}/>
      <Routes />
    </NavigationContainer>
  );
}