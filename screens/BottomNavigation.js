import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import Substitute from './Substitute';
import Recipe from './Recipe';
import Ingredients from './Ingredients';
import WeeklyPlan from './WeeklyPlan';
const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Ingredients"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    elevation: 5,
                    shadowColor: '#fafafa',
                    width: '100%',
                    alignSelf: 'center',
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#777777',
                tabBarShowLabel: false,
                headerShown: true,
            }}>
            <Tab.Screen name="Ingredients" component={Ingredients}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Ant name="home" color={focused ? '#FF6347' : '#000000'} size={30} />
                                <Text style={[styles.textStyle, focused ? { color: '#FF6347' } : null,]}>Home</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="WeeklyPlan" component={WeeklyPlan}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <MIcon name="date-range" color={focused ? '#FF6347' : '#000000'} size={30} />
                                <Text style={[styles.textStyle, focused ? { color: '#FF6347' } : null]}>Ingredients</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Recipe" component={Recipe}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <MIcon name="book" color={focused ? '#FF6347' : '#000000'} size={30} />
                                <Text style={[styles.textStyle, focused ? { color: '#FF6347' } : null]}>Recipe</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Substitute" component={Substitute}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <MIcon name="swap-horiz" color={focused ? '#FF6347' : '#000000'} size={30} />
                                <Text style={[styles.textStyle, focused ? { color: '#FF6347' } : null]}>Substitute</Text>
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        fontStyle: 'normal',
        color: '#000',
        textAlign: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default BottomTabNavigation;
