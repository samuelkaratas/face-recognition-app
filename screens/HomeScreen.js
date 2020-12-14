import React from "react";

import { Button, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ImgPicker from "../components/ImgPicker";
import { setImage } from "../store/image-actions";
import { selectImage } from "../store/image-selectors";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const imageUri = useSelector(selectImage);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImgPicker />
      {imageUri ? (
        <View style={styles.buttons}>
          <Button
            color="#ff33cc"
            title="Reset"
            onPress={() => dispatch(setImage(null))}
          />
          <Button
            color="#fc9208"
            title="Authenticate"
            onPress={() => navigation.navigate("Success")}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: 250,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
