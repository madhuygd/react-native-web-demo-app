import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Selected(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.tickBackgroundCircleStack}>
          <Svg viewBox="-2 -2 43 43" style={styles.tickBackgroundCircle}>
            <Path
              strokeWidth={4}
              fill="rgba(107,199,166,1)"
              stroke="rgba(255,255,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M19.50 37.00 C29.16 37.00 37.00 29.16 37.00 19.50 C37.00 9.84 29.16 2.00 19.50 2.00 C9.84 2.00 2.00 9.84 2.00 19.50 C2.00 29.16 9.84 37.00 19.50 37.00 Z"
            ></Path>
          </Svg>
          <View style={styles.check}>
            <Svg viewBox="-1 -1 14.5 11.22" style={styles.path15}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M11.50 1.00 L4.28 8.22 L1.00 4.94 "
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
  rect: {
    height: 35,
    width: 35
  },
  tickBackgroundCircle: {
    position: "absolute",
    height: 43,
    width: 43,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  check: {
    position: "absolute",
    top: 16,
    left: 14,
    height: 8,
    width: 11
  },
  path15: {
    height: 11,
    width: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -1,
    marginLeft: -1
  },
  tickBackgroundCircleStack: {
    width: 43,
    height: 43,
    marginTop: -2,
    marginLeft: -2
  }
});

export default Selected;
