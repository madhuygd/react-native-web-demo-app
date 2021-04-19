import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CoursesBox from "./CoursesBox";

function CoursesSlider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.coursesBox1Row}>
          <CoursesBox style={styles.coursesBox1}></CoursesBox>
          <CoursesBox style={styles.coursesBox2}></CoursesBox>
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
    height: 317,
    width: 624,
    flexDirection: "row"
  },
  coursesBox1: {
    height: 317,
    width: 302,
    backgroundColor: "transparent"
  },
  coursesBox2: {
    height: 317,
    width: 302,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  coursesBox1Row: {
    height: 317,
    flexDirection: "row",
    flex: 1
  }
});

export default CoursesSlider;
