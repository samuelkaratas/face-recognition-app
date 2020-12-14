import React from "react";

import { View, Button, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setImage } from "../store/image-actions";

const FailScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>I'm sorry</Text>
      <Text style={styles.text}>I didn't recognized you!!</Text>

      <Button
        color="#ff5050"
        title="Try Again"
        onPress={() => {
          dispatch(setImage(null));
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default FailScreen;
