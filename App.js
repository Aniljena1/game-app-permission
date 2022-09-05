import { StyleSheet } from "react-native";
import StartGameScreen from "./src/Game/StartGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./src/Game/GameScreen";
import GameOverScreen from "./src/Game/GameOverScreen";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./src/permissions/AllPlaces";
import AddPlaces from "./src/permissions/AddPlaces";
import IconButton from "./utils/IconButton";
import { Color } from "./utils/colors";
import Map from "./src/permissions/Map";
import FavoritesContextProvider from "./store/context/favorite-context";

// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return <DrawerNavigator.Navigator>
//     <Drawer.Screen name="Categories" component={CategoriesScreen}  />
//     <Drawer.Screen name="Favorites" component={FavoriteScreen}  />
//   </DrawerNavigator.Navigator>
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="AppPlaces"
            screenOptions={{
              headerStyle: { backgroundColor: Color.primary70 },
              headerTintColor: Color.primary50,
              contentStyle: { backgroundColor: Color.gray700 },
            }}
          >
            <Stack.Screen
              name="Home"
              component={StartGameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GameOver"
              component={GameOverScreen}
              options={{ headerShown: false }}
            />

            {/* permission scrren */}
            <Stack.Screen
              name="AppPlaces"
              component={AllPlaces}
              options={({ navigation }) => ({
                title: "Your Favorite Places",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    icon="add"
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate("AddPlace")}
                  />
                ),
              })}
            />

            <Stack.Screen
              name="AddPlace"
              component={AddPlaces}
              options={{ title: "Add a new place" }}
            />
            <Stack.Screen name="Map" component={Map} />

            {/* 
           nested stack navigation
          <Stack.Screen
            name="DrawerScreens"
            component={DrawerNavigator}     
            options={{
              headerShown: false
            }}              
          />
           */}
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
