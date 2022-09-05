import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import Title from "../../componenets/Title";
import { Color } from "../../utils/colors";
import NumberCOntainer from "./NumberCOntainer";
import PrimaryButton from "../../componenets/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  // recursive the function if computer guess first time same number
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ route, navigation }) {
  const { userNumber } = route.params;
  const initialGames = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGames);

  useEffect(() => {
    if (currentGuess === userNumber) {
      navigation.navigate("GameOver");
    }
  }, [currentGuess, userNumber]);

  function nextGuessNumber(direction) {
    // direction => 'lower', 'higher'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(" Don't lie! ", "You know that this is wrong...", [
        { text: "Soory", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <LinearGradient
      colors={[Color.primary600, Color.primary700]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../../assets/dice2.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.Imagebackground}
      >
        <SafeAreaView style={styles.screen}>
          <Title> Opponent's Guess </Title>
          <NumberCOntainer>{currentGuess}</NumberCOntainer>
          <View>
            <Text>Higher or lower</Text>
            <View>
              <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
              <PrimaryButton onPress={nextGuessNumber.bind(this, "greater")}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  Imagebackground: {
    opacity: 0.29,
  },
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
});
