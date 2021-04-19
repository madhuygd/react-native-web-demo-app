import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT } from "../enums";

function ButtonButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.buttonBackground}>
        <Text style={styles.getStaredt}>GET STARTED</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonBackground: {
    borderRadius: 16,
    backgroundColor: "rgba(255,100,0,1)",
    flex: 1
  },
  getStaredt: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_500,
    marginTop: 18,
    marginLeft: 118
  }
});

export default ButtonButton;
