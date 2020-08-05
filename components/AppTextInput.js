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
    marginVertical: 40,
  },
  input: {
    textAlign: "center",
    height: 70,
    width: 150,
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AppTextInput;
