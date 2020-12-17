import React from "react";

import { View, Button, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setImage, setErrorMessage, setName } from "../store/image-actions";
import { selectErrorMessage } from "../store/image-selectors";

const FailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>I'm sorry</Text>
      <Text style={styles.text}>{errorMessage}</Text>

      <Button
        color="#ff5050"
        title="Try Again"
        onPress={() => {
          dispatch(setImage(null));
          dispatch(setName(null));
          dispatch(setErrorMessage(null));
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
