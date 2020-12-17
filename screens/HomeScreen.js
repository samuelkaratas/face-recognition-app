import React from "react";

import { Button, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ImgPicker from "../components/ImgPicker";
import { setImage, setErrorMessage, setName } from "../store/image-actions";
import { selectImage } from "../store/image-selectors";

import * as FileSystem from "expo-file-system";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const imageUri = useSelector(selectImage);

  const authHandler = async () => {
    //navigation.navigate("Success");

    const res = await FileSystem.uploadAsync(
      "https://baufacerecog.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true",
      imageUri,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/octet-stream",
          "Ocp-Apim-Subscription-Key": "37d5fcd36f594af5bf098d750fbf365e",
        },
        httpMethod: "POST",
      }
    );

    const faceId = res.body.split('"')[3];

    //console.log(res.body.length);

    //console.log(faceId);

    if (faceId) {
      const res2 = await fetch(
        "https://baufacerecog.cognitiveservices.azure.com/face/v1.0/identify",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": "37d5fcd36f594af5bf098d750fbf365e",
          },
          body: JSON.stringify({
            faceIds: [faceId],
            personGroupId: "bau_face_recog_group",
          }),
        }
      );

      const res2Json = await res2.json();

      const candidateNum = res2Json[0].candidates.length;

      if (candidateNum) {
        const personId = res2Json[0].candidates[0].personId;

        //console.log(personId);

        const res3 = await fetch(
          `https://baufacerecog.cognitiveservices.azure.com/face/v1.0/persongroups/bau_face_recog_group/persons/${personId}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "37d5fcd36f594af5bf098d750fbf365e",
            },
          }
        );

        const res3Json = await res3.json();

        const name = res3Json.name;

        dispatch(setName(name));
        console.log(name);
        navigation.navigate("Success");
      } else {
        dispatch(setErrorMessage("I dont know you!"));
        console.log("I dont know you!");
        navigation.navigate("Fail");
      }
    } else {
      dispatch(setErrorMessage("No face detected!"));
      console.log("No face detected!");
      navigation.navigate("Fail");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImgPicker />
      {imageUri ? (
        <View style={styles.buttons}>
          <Button
            color="#ff33cc"
            title="Reset"
            onPress={() => {
              dispatch(setImage(null));
              dispatch(setName(null));
              dispatch(setErrorMessage(null));
            }}
          />
          <Button color="#fc9208" title="Authenticate" onPress={authHandler} />
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
