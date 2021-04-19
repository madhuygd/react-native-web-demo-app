import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Label1 from "./Label1";

function InputField1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.input1Stack}>
          <View style={styles.input1}></View>
          <Label1 style={styles.label1}></Label1>
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
  input1: {
    position: "absolute",
    top: 14,
    left: 0,
    height: 55,
    width: 340,
    borderWidth: 1,
    borderColor: "rgba(203,206,212,1)",
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
  input1Stack: {
    width: 340,
    height: 69
  }
});

export default InputField1;
