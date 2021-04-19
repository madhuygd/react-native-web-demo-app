import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Label from "./Label";

function InputField(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.inputStack}>
          <View style={styles.input}></View>
          <Label style={styles.label1}></Label>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 69,
    width: 340
  },
  input: {
    position: "absolute",
    top: 14,
    left: 0,
    height: 55,
    width: 340,
    borderWidth: 1,
    borderColor: "rgba(220,222,225,1)",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)"
  },
  label1: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 27,
    width: 78,
    backgroundColor: "transparent"
  },
  inputStack: {
    width: 340,
    height: 69
  }
});

export default InputField;
