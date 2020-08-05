import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const AppTextInput = ({ ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput {...otherProps} placeholder="Kolkata" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    textAlign: "center",
    height: 70,
    width: 150,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AppTextInput;
