import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Image, View, Platform, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import { useDispatch, useSelector } from "react-redux";

import { setImage } from "../store/image-actions";
import { selectImage } from "../store/image-selectors";

export default function ImgPicker() {
  const dispatch = useDispatch();
  const imageUri = useSelector(selectImage);
  //const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== "granted") {
          alert("Sorry, we need permissions to make this work!");
        }
      }
    })();
  }, []);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      //setImage(result.uri);
      dispatch(setImage(result.uri));
    }
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    //setImage(image.uri);
    dispatch(setImage(image.uri));
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.buttons}>
        <Button color="#fc9208" title="Take Image" onPress={takeImageHandler} />
      </View>
      <View style={styles.buttons}>
        <Button
          color="#fc9208"
          title="Pick an image from camera roll"
          onPress={pickImage}
        />
      </View>
      {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: "#ff33cc",
    borderWidth: 1,
  },
});
