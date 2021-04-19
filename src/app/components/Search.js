import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function Search(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.searchBackgroundBox}>
          <View style={styles.searchTheLanguageRow}>
            <Text style={styles.searchTheLanguage}>Search the Language…</Text>
            <View style={styles.searchIcon}>
              <View style={styles.ovalStack}>
                <Svg viewBox="-1 -1 20 20" style={styles.oval}>
                  <Path
                    strokeWidth={2}
                    fill="transparent"
                    stroke="rgba(98,101,105,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M9.00 17.00 C13.42 17.00 17.00 13.42 17.00 9.00 C17.00 4.58 13.42 1.00 9.00 1.00 C4.58 1.00 1.00 4.58 1.00 9.00 C1.00 13.42 4.58 17.00 9.00 17.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 8.35 8.35" style={styles.path}>
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
  searchBackgroundBox: {
    height: 60,
    width: 341,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,251,251,1)",
    flexDirection: "row"
  },
  searchTheLanguage: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(136,136,136,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginLeft: 159
  },
  oval: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path: {
    position: "absolute",
    height: 8,
    width: 8,
    top: 14,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalStack: {
    width: 22,
    height: 22,
    marginTop: -1,
    marginLeft: -1
  },
  searchTheLanguageRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 14,
    marginTop: 20
  }
});

export default Search;
