import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT } from "../enums";

function CourseDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.courseDetails1}>
        <Text style={styles.englishAlphabet}>English Alphabet</Text>
        <Text style={styles.thisLessonsWillTe}>
          This lessons will teach you the basic of Englist alphabets and how
          they are pronounce
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  courseDetails1: {
    height: 80,
    width: 313
  },
  englishAlphabet: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_600,
    marginLeft: 1
  },
  thisLessonsWillTe: {
    height: 48,
    width: 313,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(106,110,113,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 14
  }
});

export default CourseDetails;
