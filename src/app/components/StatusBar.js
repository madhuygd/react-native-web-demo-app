import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function StatusBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.iPhoneXStatusBarsStatusBarBlack}>
          <View style={styles.iPhoneXStatusBarsStatusBarBlack1}>
            <View style={styles.statusBackgroundBox}>
              <View style={styles.timeStyle}>
                <Text style={styles.time}>9:41</Text>
              </View>
              <View style={styles.timeStyleFiller}></View>
              <View style={styles.cellularConnectionPathRow}>
                <Svg
                  viewBox="0 0 17 10.67"
                  style={styles.cellularConnectionPath}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 15.27 10.97" style={styles.wifiPath}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M7.64 2.28 C7.64 2.28 3.29 3.13 1.68 4.66 C1.56 4.77 1.25 4.65 1.25 4.65 L0.09 3.49 C0.09 3.49 -0.00 3.34 0.00 3.26 C0.00 3.17 0.04 3.09 0.10 3.03 C4.31 -1.01 10.96 -1.01 15.18 3.03 C15.24 3.09 15.27 3.17 15.27 3.26 C15.27 3.34 15.18 3.49 15.18 3.49 L14.02 4.65 C14.02 4.65 13.71 4.77 13.59 4.66 C11.98 3.13 7.64 2.28 7.64 2.28 Z M7.64 6.07 C7.64 6.07 5.25 6.53 4.34 7.34 C4.22 7.46 3.91 7.34 3.91 7.34 L2.76 6.17 C2.76 6.17 2.66 6.03 2.66 5.94 C2.66 5.85 2.70 5.77 2.76 5.71 C5.51 3.15 9.77 3.15 12.51 5.71 C12.58 5.77 12.61 5.85 12.61 5.94 C12.61 6.03 12.52 6.17 12.52 6.17 L11.36 7.34 C11.36 7.34 11.05 7.46 10.93 7.34 C10.03 6.53 7.64 6.07 7.64 6.07 Z M7.86 10.87 C7.86 10.87 7.72 10.97 7.64 10.97 C7.55 10.97 7.41 10.87 7.41 10.87 L5.42 8.86 C5.42 8.86 5.32 8.71 5.32 8.63 C5.33 8.54 5.36 8.46 5.43 8.40 C6.70 7.32 8.57 7.32 9.85 8.40 C9.91 8.46 9.95 8.54 9.95 8.63 C9.95 8.71 9.86 8.86 9.86 8.86 L7.86 10.87 Z"
                  ></Path>
                </Svg>
                <View style={styles.battery}>
                  <View style={styles.borderRow}>
                    <View style={styles.border}>
                      <View style={styles.capacity}></View>
                    </View>
                    <Svg viewBox="0 0 1.33 4" style={styles.cap}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={0.4}
                        strokeOpacity={0.4}
                        d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
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
    height: 44,
    width: 375
  },
  iPhoneXStatusBarsStatusBarBlack: {
    height: 44,
    width: 375
  },
  iPhoneXStatusBarsStatusBarBlack1: {
    height: 44,
    width: 375
  },
  statusBackgroundBox: {
    height: 44,
    width: 375,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  timeStyle: {
    height: 20,
    width: 54,
    marginLeft: 14,
    marginTop: 14
  },
  time: {
    height: 19,
    width: 54,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_800,
    letterSpacing: -0.2800000011920929,
    marginTop: 1
  },
  timeStyleFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cellularConnectionPath: {
    height: 11,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5,
    marginTop: 1
  },
  wifiPath: {
    height: 11,
    width: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5
  },
  battery: {
    height: 12,
    width: 25,
    flexDirection: "row"
  },
  border: {
    height: 11,
    width: 22,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.35)",
    borderRadius: 2.666666746139526,
    backgroundColor: "transparent"
  },
  capacity: {
    height: 7,
    width: 18,
    borderRadius: 1.333333373069763,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 2
  },
  cap: {
    height: 4,
    width: 1,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  borderRow: {
    height: 11,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  cellularConnectionPathRow: {
    height: 12,
    flexDirection: "row",
    marginRight: 9,
    marginTop: 17
  }
});

export default StatusBar;
