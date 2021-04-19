import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function PlayButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.playBtn}>
        <View style={styles.buttonBackgroundCircle1Stack}>
          <Svg viewBox="0 0 50 50" style={styles.buttonBackgroundCircle1}>
            <Path
              strokeWidth={0}
              fill="rgba(242,149,78,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
            ></Path>
          </Svg>
          <View style={styles.playIcon1}>
            <Svg viewBox="-1 -1 16 19.43" style={styles.playIconPath1}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M1.00 1.00 L13.00 8.71 L1.00 16.43 L1.00 1.00 Z"
              ></Path>
            </Svg>
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
  playBtn: {
    height: 50,
    width: 50
  },
  buttonBackgroundCircle1: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  playIcon1: {
    position: "absolute",
    top: 17,
    left: 19,
    height: 16,
    width: 12
  },
  playIconPath1: {
    height: 19,
    width: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -1,
    marginLeft: -1
  },
  buttonBackgroundCircle1Stack: {
    width: 50,
    height: 50
  }
});

export default PlayButton;
