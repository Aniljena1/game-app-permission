import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceForm from '../../componenets/PlaceForm';


export default function AddPlaces({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate('AppPlaces',{
      place: place
    })
  }
  return (
    <PlaceForm onCreatePlace={createPlaceHandler} />
  )
}

const styles = StyleSheet.create({})