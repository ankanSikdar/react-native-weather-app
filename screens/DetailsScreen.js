import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { cityName } = route.params;

  navigation.setOptions({ title: cityName });

  return (
    <View style={styles.container}>
      <Text>{cityName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DetailsScreen;
