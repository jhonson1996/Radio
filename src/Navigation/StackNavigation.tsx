import React from "react";
import { 
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions
} from "@react-navigation/stack";
import DrawerToggleButton from "@react-navigation/drawer/src/views/DrawerToggleButton";

import { colors } from "../Constants";
import { HomeScreen } from "../Screens/HomeScreen";
import { NewsCategoryScreen } from "../Screens/CategoryScreen"
import { NewsDetailScreen } from "../Screens/NewsDetailScreen";

const Stack = createStackNavigator();

const screenOptions = () : StackNavigationOptions => {
  return {
    headerShown: true,
    headerStyle: {
      elevation: 0,
    },
    headerTitleAlign: "center",
    headerTintColor: colors.navyblue,
    headerBackTitle: 'Atrás',
    headerTitleStyle: {
      fontSize: 22,
      fontFamily: 'ABeeZee-Regular'
    },
    cardStyle: {
      backgroundColor: colors.background
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }    
}


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ screenOptions } >
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={({route, navigation}) => ({
          title: 'LA ESTACIÓN LATINA UK',
          headerStyle: {
            backgroundColor: colors.fucshia,
          },
          headerTitleAllowFontScaling: true,
          headerTintColor: 'white',
          headerLeft: () => (
            <DrawerToggleButton tintColor={'white'}/>
          )
        })
      }
        
      />
      <Stack.Screen 
        name="Category"
        component={NewsCategoryScreen}
        options={(props:any) => ({
          title: props.route.params.category.categoryName,
        })}
      />
      <Stack.Screen 
        name="Detail"
        component={NewsDetailScreen}
        options={(props:any) => ({
          title: props.route.params.category,
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator };
