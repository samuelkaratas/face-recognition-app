import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import { selectImage, selectName } from "../store/image-selectors";

const SuccessScreen = () => {
  const imageUri = useSelector(selectImage);
  const name = useSelector(selectName);
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginVertical: 30,
    borderRadius: 150,
    backgroundColor: "#ccc",
    borderColor: "#ff33cc",
    borderWidth: 1,
  },
  name: {
    color: "black",
    fontSize: 20,
  },
});

export default SuccessScreen;
