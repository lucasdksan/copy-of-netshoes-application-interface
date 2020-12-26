import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign, Feather } from '@expo/vector-icons'; 
import Home from '../screens/Home';
import Category from '../screens/Category';
import Cart from '../screens/Cart';
import Wishlist from '../screens/Wishlist';
import Account from '../screens/Account';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = ()=>{
    return(
        <NavigationContainer>
            <Navigator
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 60,
                    },
                    tabStyle: {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    iconStyle: {
                        flex: 0,
                        width: 25,
                        height: 25,
                    },
                    labelStyle: {
                        display: 'none'
                    },
                    inactiveBackgroundColor: '#e9ecef',
                    activeBackgroundColor: '#e9ecef',
                    inactiveTintColor: '#6c757d',
                    activeTintColor: '#5A2D82',
                }}
            >
                <Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarIcon: ({ color })=>{
                            return(
                                <SimpleLineIcons name="home" size={22} color={color} />
                            )
                        }
                    }} 
                />
                <Screen 
                    name="Category" 
                    component={Category}
                    options={{
                        tabBarIcon: ({ color })=>{
                            return(
                                <AntDesign name="bars" size={22} color={color} />
                            )
                        }
                    }} 
                />
                <Screen 
                    name="Cart" 
                    component={Cart}
                    options={{
                        tabBarIcon: ({ color })=>{
                            return(
                                <AntDesign name="shoppingcart" size={22} color={color} />
                            )
                        }
                    }}
                />
                <Screen 
                    name="Wishlist" 
                    component={Wishlist} 
                    options={{
                        tabBarIcon: ({ color })=>{
                            return(
                                <Feather name="heart" size={22} color={color} />
                            )
                        }
                    }}
                />
                <Screen 
                    name="Account" 
                    component={Account} 
                    options={{
                        tabBarIcon: ({ color })=>{
                            return(
                                <AntDesign name="user" size={22} color={color} />
                            )
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Tabs;