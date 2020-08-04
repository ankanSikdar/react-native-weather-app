import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import weatherApi from "../api/weatherApi";

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
      <Text>Enter City Name</Text>
      <AppTextInput onChangeText={(name) => setCity(name)} />
      <Button title="Search" onPress={handleSubmit} />
      {loading && <ActivityIndicator size="large" />}
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
