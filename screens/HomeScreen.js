import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppTextInput from "../components/AppTextInput";
import weatherApi from "../api/weatherApi";
import AppButton from "../components/AppButton";

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const weather = await weatherApi(city);
    setLoading(false);
    navigation.navigate("Details", { weather: weather });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter City Name</Text>
      <AppTextInput onChangeText={(name) => setCity(name)} />
      <AppButton title="Search" onPress={handleSubmit} />
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
  },
});

export default HomeScreen;
