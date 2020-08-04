import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    console.log(city);
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <Text>Enter City Name</Text>
      <AppTextInput onChangeText={(name) => setCity(name)} />
      <Button title="Search" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
