import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
  Alert,
} from "react-native";
import Constants from "expo-constants";

import AppTextInput from "../components/AppTextInput";
import weatherApi from "../api/weatherApi";
import AppButton from "../components/AppButton";

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);

  navigation.setOptions({ headerShown: false });

  const handleSubmit = async () => {
    setLoading(true);
    const weather = await weatherApi(city);
    setLoading(false);
    if (weather.cod != 200) {
      Alert.alert(
        `ERROR ${weather.cod}`,
        weather.message.toUpperCase(),
        [{ text: "OK", onPress: () => console.log(weather.message) }],
        { cancelable: true }
      );
      return;
    }
    navigation.navigate("Details", { weather: weather });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgrounds/wallpaper.jpg")}
        style={styles.background}
      >
        <Text style={styles.title}>Enter City Name</Text>
        <AppTextInput onChangeText={(name) => setCity(name)} />
        <AppButton title="Search" onPress={handleSubmit} />
        {loading && (
          <ActivityIndicator
            size="large"
            color="black"
            style={styles.loading}
          />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
  },
  loading: {
    marginTop: 20,
  },
});

export default HomeScreen;
