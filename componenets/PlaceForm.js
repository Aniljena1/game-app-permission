import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState,useCallback } from "react";
import { Color } from "../utils/colors";
import ImagePicker from "../src/permissions/ImagePicker";
import LocaionPicker from "../src/permissions/LocaionPicker";
import { Place } from "./place";

export default function PlaceForm({ onCreatePlace }) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedLocation, setPickedLocation] = useState()
  const [selectedImage, setSelectedImage] = useState()

  function changeHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  function takeImageHandler(imageUri){
    setSelectedImage(imageUri)
  }
  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location)
  },[])

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle,selectedImage, pickedLocation)
    onCreatePlace(placeData)
  }
  
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={enteredTitle}
          onChangeText={changeHandler}
        />
      </View>
      <ImagePicker onTakeImage = {takeImageHandler} />
      <LocaionPicker onPikeLocation = {pickLocationHandler}  />
      <Button title='Add place' onPress={savePlaceHandler}  />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Color.primary80,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Color.primary80,
    color: Color.primary80,
    borderBottomWidth: 2,
    backgroundColor: Color.primary50,
  },
});
