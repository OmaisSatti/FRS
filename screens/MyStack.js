import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import BottomTabNavigation from './BottomNavigation';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={BottomTabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default MyStack;