import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { weather } = route.params;

  navigation.setOptions({ title: weather.name });

  return (
    <View style={styles.container}>
      <Text>{weather.name}</Text>
      <Text>Latitude: {weather.coord.lat}</Text>
      <Text>Longitude: {weather.coord.lon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DetailsScreen;
