import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.menu1}>
          <View style={styles.rectangleStack}>
            <Svg viewBox="0 0 390 100" style={styles.rectangle}>
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M375.00 9.00 C375.00 9.00 390.00 9.00 390.00 24.00 C390.00 24.00 390.00 85.00 390.00 85.00 C390.00 85.00 390.00 100.00 375.00 100.00 C375.00 100.00 15.00 100.00 15.00 100.00 C15.00 100.00 0.00 100.00 0.00 85.00 C0.00 85.00 0.00 24.00 0.00 24.00 C0.00 24.00 0.00 9.00 15.00 9.00 C15.00 9.00 42.29 9.00 42.29 9.00 C45.87 3.58 52.02 0.00 59.00 0.00 C65.98 0.00 72.13 3.58 75.71 9.00 Z"
              ></Path>
            </Svg>
            <View style={styles.home}>
              <View style={styles.homeIconRow}>
                <View style={styles.homeIcon}>
                  <View style={styles.path1Stack}>
                    <Svg viewBox="-0.75 -0.75 19 20.78" style={styles.path1}>
                      <Path
                        strokeWidth={1.5}
                        fill="transparent"
                        stroke="rgba(53,56,59,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.75 6.97 L8.75 0.75 L16.75 6.97 L16.75 16.75 C16.75 17.73 15.95 18.53 14.97 18.53 L2.53 18.53 C1.55 18.53 0.75 17.73 0.75 16.75 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-0.75 -0.75 8.33 11.89" style={styles.path2}>
                      <Path
                        strokeWidth={1.5}
                        fill="transparent"
                        stroke="rgba(53,56,59,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.75 9.64 L0.75 0.75 L6.08 0.75 L6.08 9.64 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Text style={styles.home1}>Home</Text>
              </View>
            </View>
            <View style={styles.myCourseIcon}>
              <View style={styles.rectangle1Stack}>
                <View style={styles.rectangle1}></View>
                <Svg viewBox="-0.7 -0.7 9.2 17.2" style={styles.path3}>
                  <Path
                    strokeWidth={1.4}
                    fill="transparent"
                    stroke="rgba(112,115,118,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M7.10 15.10 L7.10 2.30 C7.10 1.42 6.38 0.70 5.50 0.70 L2.30 0.70 C1.42 0.70 0.70 1.42 0.70 2.30 L0.70 15.10 "
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.clockIcon}>
              <View style={styles.oval1Stack}>
                <Svg viewBox="-0.75 -0.75 19 19" style={styles.oval1}>
                  <Path
                    strokeWidth={1.5}
                    fill="transparent"
                    stroke="rgba(112,115,118,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M8.75 16.75 C13.17 16.75 16.75 13.17 16.75 8.75 C16.75 4.33 13.17 0.75 8.75 0.75 C4.33 0.75 0.75 4.33 0.75 8.75 C0.75 13.17 4.33 16.75 8.75 16.75 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-0.75 -0.75 6.2 9.4" style={styles.path4}>
                  <Path
                    strokeWidth={1.5}
                    fill="transparent"
                    stroke="rgba(112,115,118,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.75 0.75 L0.75 5.55 L3.95 7.15 "
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.userIcon}>
              <Svg viewBox="-0.75 -0.75 10 10" style={styles.oval2}>
                <Path
                  strokeWidth={1.5}
                  fill="transparent"
                  stroke="rgba(112,115,118,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M4.25 7.75 C6.18 7.75 7.75 6.18 7.75 4.25 C7.75 2.32 6.18 0.75 4.25 0.75 C2.32 0.75 0.75 2.32 0.75 4.25 C0.75 6.18 2.32 7.75 4.25 7.75 Z"
                ></Path>
              </Svg>
              <Svg viewBox="-0.75 -0.75 17 8.25" style={styles.path5}>
                <Path
                  strokeWidth={1.5}
                  fill="transparent"
                  stroke="rgba(112,115,118,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M14.75 6.00 L14.75 4.25 C14.75 2.32 13.18 0.75 11.25 0.75 L4.25 0.75 C2.32 0.75 0.75 2.32 0.75 4.25 L0.75 6.00 "
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
    height: 100,
    width: 390
  },
  menu1: {
    height: 100,
    width: 390
  },
  rectangle: {
    position: "absolute",
    height: 100,
    width: 390,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  home: {
    position: "absolute",
    top: 33,
    left: 28,
    height: 20,
    width: 68,
    flexDirection: "row"
  },
  homeIcon: {
    height: 18,
    width: 16
  },
  path1: {
    position: "absolute",
    height: 21,
    width: 19,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path2: {
    position: "absolute",
    height: 12,
    width: 8,
    top: 9,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path1Stack: {
    width: 19,
    height: 21,
    marginTop: -1,
    marginLeft: -1
  },
  home1: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    marginLeft: 13,
    marginTop: 1
  },
  homeIconRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  myCourseIcon: {
    position: "absolute",
    top: 36,
    left: 146,
    height: 15,
    width: 16
  },
  rectangle1: {
    position: "absolute",
    top: 4,
    left: 0,
    height: 11,
    width: 16,
    borderWidth: 1.4,
    borderColor: "rgba(112,115,118,1)",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  path3: {
    position: "absolute",
    height: 17,
    width: 9,
    top: 0,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle1Stack: {
    width: 16,
    height: 17,
    marginTop: -1
  },
  clockIcon: {
    position: "absolute",
    top: 35,
    left: 247,
    height: 16,
    width: 16
  },
  oval1: {
    position: "absolute",
    height: 19,
    width: 19,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path4: {
    position: "absolute",
    height: 9,
    width: 6,
    top: 3,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1Stack: {
    width: 19,
    height: 19,
    marginTop: -1,
    marginLeft: -1
  },
  userIcon: {
    position: "absolute",
    top: 36,
    left: 347,
    height: 16,
    width: 14
  },
  oval2: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -1,
    marginLeft: 3
  },
  path5: {
    height: 8,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: -1
  },
  rectangleStack: {
    width: 390,
    height: 100
  }
});

export default Menu;
