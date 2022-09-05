import { StyleSheet, Text, View } from "react-native";
import PlacesList from "../../componenets/PlacesList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/core";

export default function AllPlaces({ route }) {
  const [loadPlaces, setLoadPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadPlaces} />;
}

const styles = StyleSheet.create({});
