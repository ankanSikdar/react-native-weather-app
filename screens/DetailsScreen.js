import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

const DetailsScreen = ({ route, navigation }) => {
  const { weather } = route.params;
  const icon = weather.weather[0].icon;
  const weatherId = weather.weather[0].id;
  let backgroundImage = "";

  const setBackground = (id) => {
    if (weatherId > 800) {
      backgroundImage = require("../assets/backgrounds/clouds.jpg");
    } else if (weatherId == 800) {
      backgroundImage = require("../assets/backgrounds/clear.jpg");
    } else if (weatherId >= 700) {
      backgroundImage = require("../assets/backgrounds/atmosphere.jpg");
    } else if (weatherId >= 600) {
      backgroundImage = require("../assets/backgrounds/snowfall.jpg");
    } else if (weatherId >= 500) {
      backgroundImage = require("../assets/backgrounds/rainfall.jpg");
    } else if (weatherId >= 300) {
      backgroundImage = require("../assets/backgrounds/drizzle.jpg");
    } else {
      backgroundImage = require("../assets/backgrounds/thunderstorm.jpg");
    }
  };
  setBackground(weatherId);

  navigation.setOptions({ headerShown: false });

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.mainCard}>
            <View style={styles.mainCardContainer}>
              <Text style={styles.cityName} numberOfLines={1}>
                {weather.name}
              </Text>
              <Text style={styles.weatherTitle}>
                {weather.weather[0].main}{" "}
              </Text>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}
                style={styles.icon}
              />
              <Text style={styles.mainTemperature}>
                {(weather.main.temp - 273.15).toPrecision(2)}&deg;C
              </Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailsRow}>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Coordinates</Text>
                <Text style={styles.detailsText}>
                  Latitude: {weather.coord.lat}
                </Text>
                <Text style={styles.detailsText}>
                  Longitude: {weather.coord.lon}
                </Text>
              </View>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Clouds</Text>
                <Text style={styles.detailsText}>
                  Cloudiness: {weather.clouds.all}&#37;
                </Text>
              </View>
            </View>
            <View style={styles.detailsRow}>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Temperature</Text>
                <Text style={styles.detailsText}>
                  Actual: {(weather.main.temp - 273.15).toPrecision(4)}
                  &deg;C
                </Text>
                <Text style={styles.detailsText}>
                  Feels Like:{" "}
                  {(weather.main.feels_like - 273.15).toPrecision(4)}
                  &deg;C
                </Text>
              </View>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Air</Text>
                <Text style={styles.detailsText}>
                  Humidity: {weather.main.humidity}&#37;
                </Text>
                <Text style={styles.detailsText}>
                  Pressure: {weather.main.pressure}hPa
                </Text>
              </View>
            </View>
            <View style={styles.detailsRow}>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Max Min</Text>
                <Text style={styles.detailsText}>
                  Max Temp: {(weather.main.temp_max - 273.15).toPrecision(4)}
                  &deg;C
                </Text>
                <Text style={styles.detailsText}>
                  Min Temp: {(weather.main.temp_min - 273.15).toPrecision(4)}
                  &deg;C
                </Text>
              </View>
              <View style={styles.detailsCard}>
                <Text style={styles.detailsTitle}>Wind</Text>
                <Text style={styles.detailsText}>
                  Wind Deg: {weather.wind.deg}&deg;
                </Text>
                <Text style={styles.detailsText}>
                  Speed: {(weather.wind.speed * 3.6).toPrecision(3)} km/hr
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    opacity: 0.85,
    resizeMode: "cover",
    paddingTop: Constants.statusBarHeight + 20,
  },
  icon: {
    height: 100,
    width: 100,
    backgroundColor: "rgb(46, 147, 255)",
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
    marginBottom: 15,
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
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsCard: {
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    width: 180,
    alignItems: "flex-start",
    padding: 10,
    marginVertical: 15,
  },
  detailsTitle: {
    borderBottomColor: "white",
    borderBottomWidth: 3,
    width: "100%",
    marginVertical: 5,
    color: "white",
    fontSize: 20,
  },
  detailsText: {
    fontSize: 17,
    color: "white",
  },
});

export default DetailsScreen;
