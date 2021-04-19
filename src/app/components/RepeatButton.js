import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function RepeatButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.buttonBackgroundBox}>
          <View style={styles.repeat}>
            <View style={styles.path6Stack}>
              <Svg viewBox="-1 -1 7.11 10.22" style={styles.path6}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M1.00 1.00 L4.11 4.11 L1.00 7.22 "
                ></Path>
              </Svg>
              <Svg viewBox="-1 -1 18 8.67" style={styles.path7}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M1.00 5.67 L1.00 4.11 C1.00 2.39 2.39 1.00 4.11 1.00 L15.00 1.00 "
                ></Path>
              </Svg>
              <Svg viewBox="-1 -1 7.11 10.22" style={styles.path8}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M4.11 7.22 L1.00 4.11 L4.11 1.00 "
                ></Path>
              </Svg>
              <Svg viewBox="-1 -1 18 8.67" style={styles.path9}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M15.00 1.00 L15.00 2.56 C15.00 4.27 13.61 5.67 11.89 5.67 L1.00 5.67 "
                ></Path>
              </Svg>
            </View>
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
    width: 40
  },
  buttonBackgroundBox: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: "rgba(242,149,78,1)"
  },
  repeat: {
    height: 18,
    width: 14,
    marginTop: 11,
    marginLeft: 13
  },
  path6: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 0,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path7: {
    position: "absolute",
    height: 9,
    width: 18,
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path8: {
    position: "absolute",
    height: 10,
    width: 7,
    top: 11,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path9: {
    position: "absolute",
    height: 9,
    width: 18,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path6Stack: {
    width: 18,
    height: 21,
    marginTop: -1,
    marginLeft: -1
  }
});

export default RepeatButton;
