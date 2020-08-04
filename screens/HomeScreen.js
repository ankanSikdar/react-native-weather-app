import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Search" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
