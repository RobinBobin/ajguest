import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import ContinueContainer, {
  ContinueContainerProps
} from "./ContinueContainer";
import {
  borderTopRadius
} from "../../styles";
import ExerciseT from "../../types/Exercise";

export default function Exercise(props: ExerciseProps) {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.fillIn}
      >
        {strings.fillIn}
      </Text>
      <ContinueContainer
        backgroundColor={"cyan"}
        buttonBackgroundColor={"white"}
        disabled={true}
        onPress={null}
        title={""}
      />
    </View>
  );
}

export interface ExerciseProps {
  exercise: ExerciseT
};

const strings = require("../../strings").default.exercise;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkblue",
    borderTopEndRadius: borderTopRadius,
    borderTopStartRadius: borderTopRadius,
    flex: 1,
    justifyContent: "space-between"
  },
  fillIn: {
    alignSelf: "center",
    color: "white"
  },
});
