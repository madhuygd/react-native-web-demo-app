import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function DownloadButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.buttonBackgroundBox1}>
          <View style={styles.downloadIcon}>
            <View style={styles.path18Stack}>
              <Svg viewBox="-1 -1 18 8.67" style={styles.path18}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(109,110,113,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M15.00 1.00 L15.00 4.11 C15.00 4.97 14.30 5.67 13.44 5.67 L2.56 5.67 C1.70 5.67 1.00 4.97 1.00 4.11 L1.00 1.00 "
                ></Path>
              </Svg>
              <Svg viewBox="-1 -1 11.78 7.89" style={styles.path19}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(109,110,113,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M1.00 1.00 L4.89 4.89 L8.78 1.00 "
                ></Path>
              </Svg>
              <Svg viewBox="-1 -1 4.78 13.33" style={styles.path20}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(109,110,113,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M1.39 10.33 L1.39 1.00 "
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
  buttonBackgroundBox1: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "rgba(229,229,229,1)",
    borderRadius: 12,
    shadowColor: "rgba(37,39,38,0.04157561188811189)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)"
  },
  downloadIcon: {
    height: 14,
    width: 14,
    marginTop: 12,
    marginLeft: 13
  },
  path18: {
    position: "absolute",
    height: 9,
    width: 18,
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path19: {
    position: "absolute",
    height: 8,
    width: 12,
    top: 5,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path20: {
    position: "absolute",
    height: 13,
    width: 5,
    top: 0,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path18Stack: {
    width: 18,
    height: 18,
    marginTop: -1,
    marginLeft: -1
  }
});

export default DownloadButton;
