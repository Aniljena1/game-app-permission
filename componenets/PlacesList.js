import { FlatList, Text, View, StyleSheet } from "react-native";
import Placeitem from "./PlaceItem";
import { Color } from '../utils/colors';

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!{" "}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <Placeitem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list:{
    margin:24
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color:Color.primary50
  },
});
