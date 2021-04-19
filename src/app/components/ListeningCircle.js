import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function ListeningCircle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.micBackgroundCircleStack}>
          <Svg
            viewBox="-0.5 -0.5 144.5 144.5"
            style={styles.micBackgroundCircle}
          >
            <Path
              strokeWidth={1}
              fill="rgba(230,230,230,1)"
              stroke="rgba(226,220,220,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M71.25 142.50 C110.60 142.50 142.50 110.60 142.50 71.25 C142.50 31.90 110.60 0.00 71.25 0.00 C31.90 0.00 0.00 31.90 0.00 71.25 C0.00 110.60 31.90 142.50 71.25 142.50 Z"
            ></Path>
          </Svg>
          <Svg viewBox="-0.5 -0.5 192 192" style={styles.micBackgroundCircle1}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(220,220,220,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M95.00 190.00 C147.47 190.00 190.00 147.47 190.00 95.00 C190.00 42.53 147.47 0.00 95.00 0.00 C42.53 0.00 0.00 42.53 0.00 95.00 C0.00 147.47 42.53 190.00 95.00 190.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 100.48 100.48" style={styles.micBackgroundCircle2}>
            <Path
              strokeWidth={0}
              fill="rgba(218,218,218,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M50.24 100.48 C77.99 100.48 100.48 77.99 100.48 50.24 C100.48 22.49 77.99 0.00 50.24 0.00 C22.49 0.00 0.00 22.49 0.00 50.24 C0.00 77.99 22.49 100.48 50.24 100.48 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 60.29 60.29" style={styles.micBackgroundCircle3}>
            <Path
              strokeWidth={0}
              fill="rgba(223,223,223,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M30.14 60.29 C46.79 60.29 60.29 46.79 60.29 30.14 C60.29 13.50 46.79 0.00 30.14 0.00 C13.50 0.00 0.00 13.50 0.00 30.14 C0.00 46.79 13.50 60.29 30.14 60.29 Z"
            ></Path>
          </Svg>
          <View style={styles.mic}>
            <View style={styles.path16Stack}>
              <Svg viewBox="0 0 9.84 18.27" style={styles.path16}>
                <Path
                  strokeWidth={0}
                  fill="rgba(69,76,73,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M4.92 18.27 C6.27 18.27 7.43 17.77 8.39 16.78 C9.36 15.79 9.84 14.59 9.84 13.19 L9.84 5.08 C9.84 3.68 9.36 2.48 8.39 1.49 C7.43 0.50 6.27 0.00 4.92 0.00 C3.57 0.00 2.41 0.50 1.44 1.49 C0.48 2.48 0.00 3.68 0.00 5.08 L0.00 13.19 C0.00 14.59 0.48 15.79 1.44 16.78 C2.41 17.77 3.57 18.27 4.92 18.27 Z"
                ></Path>
              </Svg>
              <Svg viewBox="0 0 18.27 16.16" style={styles.path17}>
                <Path
                  strokeWidth={0}
                  fill="rgba(69,76,73,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M17.97 0.30 C17.77 0.10 17.53 0.00 17.25 0.00 C16.98 0.00 16.74 0.10 16.54 0.30 C16.34 0.50 16.24 0.74 16.24 1.01 L16.24 3.03 C16.24 4.98 15.54 6.64 14.15 8.03 C12.76 9.41 11.09 10.10 9.13 10.10 C7.18 10.10 5.51 9.41 4.12 8.03 C2.73 6.64 2.03 4.98 2.03 3.03 L2.03 1.01 C2.03 0.74 1.93 0.50 1.73 0.30 C1.53 0.10 1.29 0.00 1.02 0.00 C0.74 0.00 0.50 0.10 0.30 0.30 C0.10 0.50 0.00 0.74 0.00 1.01 L0.00 3.03 C0.00 5.36 0.78 7.38 2.34 9.10 C3.90 10.82 5.83 11.80 8.12 12.06 L8.12 14.14 L4.06 14.14 C3.78 14.14 3.55 14.24 3.35 14.44 C3.15 14.64 3.04 14.88 3.04 15.15 C3.04 15.42 3.15 15.66 3.35 15.86 C3.55 16.06 3.78 16.16 4.06 16.16 L14.21 16.16 C14.48 16.16 14.72 16.06 14.92 15.86 C15.12 15.66 15.22 15.42 15.22 15.15 C15.22 14.88 15.12 14.64 14.92 14.44 C14.72 14.24 14.48 14.14 14.21 14.14 L10.15 14.14 L10.15 12.06 C12.44 11.80 14.37 10.82 15.93 9.10 C17.49 7.38 18.27 5.36 18.27 3.03 L18.27 1.01 C18.27 0.74 18.17 0.50 17.97 0.30 Z"
                ></Path>
              </Svg>
            </View>
            <Text style={styles.listening}>Listening…</Text>
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
    height: 190,
    width: 190
  },
  micBackgroundCircle: {
    position: "absolute",
    height: 145,
    width: 145,
    top: 23,
    left: 23,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  micBackgroundCircle1: {
    position: "absolute",
    height: 192,
    width: 192,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  micBackgroundCircle2: {
    position: "absolute",
    height: 100,
    width: 100,
    top: 45,
    left: 45,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  micBackgroundCircle3: {
    position: "absolute",
    height: 60,
    width: 60,
    top: 65,
    left: 65,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  mic: {
    position: "absolute",
    top: 82,
    left: 54,
    height: 86,
    width: 84
  },
  path16: {
    position: "absolute",
    height: 18,
    width: 10,
    top: 0,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path17: {
    position: "absolute",
    height: 16,
    width: 18,
    top: 10,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path16Stack: {
    width: 18,
    height: 26,
    marginLeft: 32
  },
  listening: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_600,
    marginTop: 38
  },
  micBackgroundCircleStack: {
    width: 192,
    height: 192
  }
});

export default ListeningCircle;
