import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT } from "../enums";

function Label2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.label3}>
        <View style={styles.labelBackgroundBox}>
          <View style={styles.chooseLanguageForFiller}></View>
          <Text style={styles.chooseLanguageFor}>Choose language for app</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label3: {
    height: 20,
    width: 176
  },
  labelBackgroundBox: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  chooseLanguageForFiller: {
    flex: 1
  },
  chooseLanguageFor: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginBottom: 1,
    marginLeft: 11,
    marginRight: 10
  }
});

export default Label2;
