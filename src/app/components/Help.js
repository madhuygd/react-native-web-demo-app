import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function Help(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.helpBackgroundBox}>
          <View style={styles.group3Row}>
            <View style={styles.group3}>
              <View style={styles.helpCircleRow}>
                <View style={styles.helpCircle}>
                  <View style={styles.oval4Stack}>
                    <Svg viewBox="-1 -1 24 24" style={styles.oval4}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(242,78,78,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M11.00 21.00 C16.52 21.00 21.00 16.52 21.00 11.00 C21.00 5.48 16.52 1.00 11.00 1.00 C5.48 1.00 1.00 5.48 1.00 11.00 C1.00 16.52 5.48 21.00 11.00 21.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-1 -1 9.83 10" style={styles.path11}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(242,78,78,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.00 3.00 C1.49 1.62 2.90 0.80 4.34 1.04 C5.78 1.29 6.83 2.54 6.83 4.00 C6.83 6.00 3.83 7.00 3.83 7.00 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="-1 -1 5 5" style={styles.path12}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(242,78,78,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.50 1.50 L1.50 1.50 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.didtSeeTheLanguaColumn}>
                  <Text style={styles.didtSeeTheLangua}>
                    Did’t See the Language
                  </Text>
                  <Text style={styles.weAreAvilable247}>
                    We are avilable 24/7 for your help
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.arrowRightIcon}>
              <View style={styles.path13Stack}>
                <Svg viewBox="-1 -1 18 5" style={styles.path13}>
                  <Path
                    strokeWidth={2}
                    fill="transparent"
                    stroke="rgba(134,134,134,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M1.00 1.50 L15.00 1.50 "
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 11 18" style={styles.path14}>
                  <Path
                    strokeWidth={2}
                    fill="transparent"
                    stroke="rgba(134,134,134,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M1.00 1.00 L8.00 8.00 L1.00 15.00 "
                  ></Path>
                </Svg>
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
    height: 83,
    width: 341
  },
  helpBackgroundBox: {
    height: 83,
    width: 341,
    borderRadius: 16,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)",
    flexDirection: "row"
  },
  group3: {
    height: 44,
    width: 241
  },
  helpCircle: {
    height: 20,
    width: 20,
    marginTop: 1
  },
  oval4: {
    position: "absolute",
    height: 24,
    width: 24,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path11: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 5,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path12: {
    position: "absolute",
    height: 5,
    width: 5,
    top: 15,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval4Stack: {
    width: 24,
    height: 24,
    marginTop: -1,
    marginLeft: -1
  },
  didtSeeTheLangua: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600
  },
  weAreAvilable247: {
    height: 24,
    width: 212,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(106,110,113,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 3
  },
  didtSeeTheLanguaColumn: {
    width: 212,
    marginLeft: 9
  },
  helpCircleRow: {
    height: 44,
    flexDirection: "row"
  },
  arrowRightIcon: {
    height: 14,
    width: 14,
    marginLeft: 44,
    marginTop: 16
  },
  path13: {
    position: "absolute",
    height: 5,
    width: 18,
    top: 7,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path14: {
    position: "absolute",
    height: 18,
    width: 11,
    top: 0,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path13Stack: {
    width: 18,
    height: 18,
    marginTop: -1,
    marginLeft: -1
  },
  group3Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 23,
    marginTop: 19
  }
});

export default Help;
