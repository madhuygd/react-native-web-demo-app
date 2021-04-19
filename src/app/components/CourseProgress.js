import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

function CourseProgress(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.courseProgressBackgroundBoxStack}>
          <View style={styles.courseProgressBackgroundBox}></View>
          <ImageBackground
            style={styles.courseProgressSecondaryBackgroundBox}
            imageStyle={styles.courseProgressSecondaryBackgroundBox_imageStyle}
            source={require("../../assets/images/Gradient_HcmrKaO.png")}
          ></ImageBackground>
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
    height: 10,
    width: 341
  },
  courseProgressBackgroundBox: {
    position: "absolute",
    top: 3,
    left: 0,
    height: 4,
    width: 341,
    borderRadius: 2,
    backgroundColor: "rgba(232,230,230,1)"
  },
  courseProgressSecondaryBackgroundBox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 10,
    width: 121,
    borderRadius: 5,
    backgroundColor: "transparent",
    overflow: "hidden"
  },
  courseProgressSecondaryBackgroundBox_imageStyle: {},
  courseProgressBackgroundBoxStack: {
    width: 341,
    height: 10
  }
});

export default CourseProgress;
