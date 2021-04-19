import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT } from "../enums";

function Toggle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.voiceRow}>
          <Text style={styles.voice}>Voice</Text>
          <View style={styles.toggleBackgroundBox}>
            <View style={styles.toggleActiveBox}></View>
          </View>
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
    height: 40,
    width: 110,
    flexDirection: "row"
  },
  voice: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(115,117,124,1)",
    fontSize: 13,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2600000011069434,
    marginTop: 11
  },
  toggleBackgroundBox: {
    height: 40,
    width: 67,
    borderWidth: 1,
    borderColor: "rgba(206,206,206,1)",
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 15
  },
  toggleActiveBox: {
    height: 35,
    width: 35,
    borderRadius: 12,
    backgroundColor: "rgba(107,199,166,1)",
    marginTop: 3,
    marginLeft: 3
  },
  voiceRow: {
    height: 40,
    flexDirection: "row",
    flex: 1
  }
});

export default Toggle;
