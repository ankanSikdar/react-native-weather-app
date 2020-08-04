import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const AppTextInput = ({ ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput {...otherProps} placeholder="Kolkata" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppTextInput;
