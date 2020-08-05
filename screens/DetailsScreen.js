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
        source={require("../assets/backgrounds/clear.jpg")}
        style={styles.background}
      >
        <View style={styles.mainCard}>
          <View style={styles.mainCardContainer}>
            <Text style={styles.cityName} numberOfLines={1}>
              {weather.name}
            </Text>
            <Text style={styles.weatherTitle}>{weather.weather[0].main} </Text>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
              }}
              style={styles.icon}
            />
            <Text style={styles.mainTemperature}>
              {(weather.main.temp - 273.15).toPrecision(4)}&deg;C
            </Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.detailsText}>Lat: {weather.coord.lat}</Text>
            <Text style={styles.detailsText}>Lon: {weather.coord.lon}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.detailsText}>
              Cloud: {weather.clouds.all}&#37;
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.detailsText}>
              Temp: {(weather.main.temp - 273.15).toPrecision(4)}&deg;C
            </Text>
            <Text style={styles.detailsText}>
              Feels: {(weather.main.feels_like - 273.15).toPrecision(4)}
              &deg;C
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.detailsText}>
              Humidity: {weather.main.humidity}&#37;
            </Text>
          </View>
        </View>
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
    // justifyContent: "center",
    alignItems: "center",
    opacity: 0.85,
    paddingTop: 50,
    resizeMode: "contain",
  },
  icon: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
  },
  mainCard: {
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  mainCardContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cityName: {
    fontSize: 40,
    overflow: "hidden",
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },
  weatherTitle: {
    fontSize: 35,
    marginVertical: 15,
    fontWeight: "bold",
    color: "white",
  },
  mainTemperature: {
    fontSize: 30,
    marginVertical: 20,
    fontWeight: "bold",
    color: "white",
  },
  detailsContainer: {
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  detailsText: {
    fontSize: 20,
    color: "white",
  },
});

export default DetailsScreen;
