import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { weather } = route.params;
  const icon = weather.weather[0].icon;
  console.log(weather);

  navigation.setOptions({ headerShown: false });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgrounds/drizzle.jpg")}
        style={styles.background}
      >
        <Text>{weather.name}</Text>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
          }}
          style={styles.icon}
        />
        <Text>Weather: {weather.weather[0].main}</Text>
        <Text>Latitude: {weather.coord.lat}</Text>
        <Text>Longitude: {weather.coord.lon}</Text>
        <Text>
          Temperature: {(weather.main.temp - 273.15).toPrecision(4)} C
        </Text>
        <Text>
          Feels Like: {(weather.main.feels_like - 273.15).toPrecision(4)} C
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.85,
  },
  icon: {
    height: 200,
    width: 200,
  },
});

export default DetailsScreen;
