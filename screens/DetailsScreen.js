import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { weather } = route.params;
  const icon = weather.weather[0].icon;
  console.log(icon);

  navigation.setOptions({ title: weather.name });

  return (
    <View style={styles.container}>
      <Text>{weather.name}</Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
        }}
        style={styles.icon}
      />
      <Text>Latitude: {weather.coord.lat}</Text>
      <Text>Longitude: {weather.coord.lon}</Text>
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
  icon: {
    height: 200,
    width: 200,
  },
});

export default DetailsScreen;
