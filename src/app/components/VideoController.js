import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import VideoProgress from "./VideoProgress";
import Svg, { Path } from "react-native-svg";
import { FONT } from "../enums";

function VideoController(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.style4Row}>
          <Text style={styles.style4}>1:00</Text>
          <VideoProgress style={styles.videoProgress1}></VideoProgress>
          <Text style={styles.style3}>1.30:20</Text>
          <View style={styles.maximize}>
            <Svg viewBox="-1 -1 16 16" style={styles.path22}>
              <Path
                strokeWidth={4}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M2.00 5.33 L2.00 3.33 L3.33 2.00 L5.33 2.00 M10.67 2.00 L12.67 2.00 L14.00 3.33 L14.00 5.33 M14.00 10.67 L14.00 12.67 L12.67 14.00 L10.67 14.00 M5.33 14.00 L3.33 14.00 L2.00 12.67 L2.00 10.67 "
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
    height: 17,
    width: 312,
    flexDirection: "row"
  },
  style4: {
    height: 17,
    width: 32,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: FONT.MANROPE_600
  },
  videoProgress1: {
    height: 4,
    width: 200,
    backgroundColor: "transparent",
    marginLeft: 1,
    marginTop: 5
  },
  style3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: FONT.MANROPE_600,
    marginLeft: 15
  },
  maximize: {
    height: 12,
    width: 12,
    marginLeft: 15,
    marginTop: 2
  },
  path22: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -1,
    marginLeft: -1
  },
  style4Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  }
});

export default VideoController;
