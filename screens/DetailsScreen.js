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
            <Text style={styles.mainTemperature}>
              {(weather.main.temp - 273.15).toPrecision(4)}&deg;C
            </Text>
          </View>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
            style={styles.icon}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: "column",
              margin: 10,
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.detailsText}>Lat: {weather.coord.lat}</Text>
              <Text style={styles.detailsText}>Lon: {weather.coord.lon}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.detailsText}>
                Cloud: {weather.clouds.all}&#37;{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              margin: 10,
            }}
          >
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
                Humidity: {weather.main.humidity}&#37;{" "}
              </Text>
            </View>
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
  },
  mainCard: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  mainCardContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  cityName: {
    fontSize: 30,
    overflow: "hidden",
    marginTop: 5,
    maxWidth: 250,
    fontWeight: "bold",
  },
  weatherTitle: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: "bold",
  },
  mainTemperature: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  detailsText: {
    fontSize: 20,
  },
});

export default DetailsScreen;
