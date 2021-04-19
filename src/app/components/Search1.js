import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function Search1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.search2}>
          <View style={styles.searchBackgroundBox1}>
            <View style={styles.searchTheLanguage1Row}>
              <Text style={styles.searchTheLanguage1}>
                Search the Language…
              </Text>
              <View style={styles.searchIcon1}>
                <View style={styles.oval3Stack}>
                  <Svg viewBox="-1 -1 20 20" style={styles.oval3}>
                    <Path
                      strokeWidth={2}
                      fill="transparent"
                      stroke="rgba(98,101,105,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M9.00 17.00 C13.42 17.00 17.00 13.42 17.00 9.00 C17.00 4.58 13.42 1.00 9.00 1.00 C4.58 1.00 1.00 4.58 1.00 9.00 C1.00 13.42 4.58 17.00 9.00 17.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="-1 -1 8.35 8.35" style={styles.path10}>
                    <Path
                      strokeWidth={2}
                      fill="transparent"
                      stroke="rgba(98,101,105,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.35 5.35 L1.00 1.00 "
                    ></Path>
                  </Svg>
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
    height: 60,
    width: 341
  },
  search2: {
    height: 60,
    width: 341
  },
  searchBackgroundBox1: {
    height: 60,
    width: 341,
    borderWidth: 1,
    borderColor: "rgba(225,225,225,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,251,251,1)",
    flexDirection: "row"
  },
  searchTheLanguage1: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(136,136,136,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR
  },
  searchIcon1: {
    height: 18,
    width: 18,
    marginLeft: 159
  },
  oval3: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path10: {
    position: "absolute",
    height: 8,
    width: 8,
    top: 14,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval3Stack: {
    width: 22,
    height: 22,
    marginTop: -1,
    marginLeft: -1
  },
  searchTheLanguage1Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 14,
    marginTop: 20
  }
});

export default Search1;
