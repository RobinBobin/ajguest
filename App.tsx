/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import firestore from "@react-native-firebase/firestore";
import React, {
  useEffect,
  useRef,
  useState
} from "react";
import {
  SafeAreaView,
  StyleSheet
} from "react-native";
import Exercise from "./src/components/exercise/Exercise";
import ExerciseT from "./src/types/Exercise";

export default function App() {
  const exercises = useRef <Array <ExerciseT>> ([]).current;
  
  const [exerciseIndex, setExerciseIndex] = useState(-1);
  
  useEffect(() => {
    function onError(error: Error) {
      console.error(error);
    }
    
    function onResult(snapshot) {
      exercises.length = 0;
      
      snapshot.forEach((exercise) => {
        const {
          from,
          to,
          variants
        } = exercise.data();
        
        exercises.push({
          from,
          to,
          variants
        });
      });
      
      setExerciseIndex(0);
    }
    
    const unsubscriber = firestore()
      .collection("exercises")
      .onSnapshot(onResult, onError);
    
    return () => {
      unsubscriber();
    }
  }, []);
  
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Exercise
        exercise={exercises[exerciseIndex]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
    paddingTop: 100
  },
});
