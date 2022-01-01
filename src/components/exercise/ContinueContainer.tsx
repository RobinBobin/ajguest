import React, {
  useMemo
} from "react";
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import {
  borderTopRadius
} from "../../styles";

export default function ContinueContainer(props: ContinueContainerProps) {
  const buttonStyle = useMemo(() => [
    styles.buttonContainer,
    {
      backgroundColor: props.buttonBackgroundColor
    }
  ], [props.buttonBackgroundColor]);
  
  const containerStyle = useMemo(() => [
    styles.container,
    {
      backgroundColor: props.backgroundColor
    }
  ], [props.backgroundColor]);
  
  return (
    <View
      style={containerStyle}
    >
      <Pressable
        style={buttonStyle}
      />
    </View>
  );
};

export interface ContinueContainerProps {
  backgroundColor: ColorValue | undefined;
  buttonBackgroundColor: ColorValue | undefined;
  disabled: boolean,
  onPress: null | ((event: GestureResponderEvent) => void) | undefined
  title: string
};

const continueButtonHeight = 60;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    height: continueButtonHeight
  },
  container: {
    borderTopStartRadius: borderTopRadius,
    borderTopEndRadius: borderTopRadius,
    height: continueButtonHeight * 3,
    justifyContent: "center" as const,
    paddingHorizontal: 40
  }
});
