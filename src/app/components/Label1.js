import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT } from "../enums";

function Label1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.label2}>
        <View style={styles.labelBackgroundStack}>
          <View style={styles.labelBackground}></View>
          <Text style={styles.emailId1}>Email ID</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label2: {
    height: 27,
    width: 78
  },
  labelBackground: {
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId1: {
    position: "absolute",
    left: 18,
    right: 16,
    bottom: 5,
    backgroundColor: "transparent",
    color: "rgba(120,119,119,1)",
    fontSize: 12,
    fontFamily: FONT.MANROPE_500
  },
  labelBackgroundStack: {
    flex: 1,
    marginTop: -6
  }
});

export default Label1;
