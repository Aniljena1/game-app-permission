import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../../componenets/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../utils/colors";
import Title from "../../componenets/Title";

export default function StartGameScreen({ navigation: { navigate } }) {
  const [enterValue, setEnterValue] = useState("");
  const numberInputHandler = (enterText) => {
    setEnterValue(enterText);
  };

  const resetInputHandler = () => {
    setEnterValue("");
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enterValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 90) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 to 99",

        [{ text: "ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    navigate("Game", { userNumber: chooseNumber });
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/dice2.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.Imagebackground}
      >
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <View style={styles.inputContainer}>
          <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enterValue}
              keyboardType="number-pad"
              // placeholder="Enter only Number"
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
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
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 30,
    marginHorizontal: 24,
    backgroundColor: Color.primary500,
    borderRadius: 8,
    elevation: 6, //shadow effect
  },

  instructionText:{
    color:'white',
    fontSize:17,
  },

  numberInput: {
    height: 30,
    width: 160,
    fontSize: 16,
    borderBottomColor: Color.primary700,
    borderBottomWidth: 2,
    color: "#fff",
    marginVertical: 6,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
