import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const AppTextInput = ({ ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...otherProps}
        placeholder="Kolkata"
        style={styles.input}
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  input: {
    textAlign: "center",
    height: 70,
    width: 300,
    borderBottomColor: "black",
    borderBottomWidth: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default AppTextInput;
