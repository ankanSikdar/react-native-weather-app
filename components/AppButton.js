import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Text,
} from "react-native";

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 15,
  },
  text: {
    textTransform: "uppercase",
    color: "white",
  },
});

export default AppButton;
