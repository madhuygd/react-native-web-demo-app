import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import VideoThumbnail from "./VideoThumbnail";
import CourseDetails from "./CourseDetails";
import CourseActions from "./CourseActions";

function CourseVideoBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle7}>
          <View style={styles.rectangle8}>
            <VideoThumbnail style={styles.videoThumbnail2}></VideoThumbnail>
            <CourseDetails style={styles.courseDetails2}></CourseDetails>
          </View>
          <CourseActions style={styles.courseActions1}></CourseActions>
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
    height: 380,
    width: 340
  },
  rectangle7: {
    height: 380,
    width: 340,
    borderWidth: 1,
    borderColor: "rgba(229,229,229,1)",
    borderRadius: 30,
    shadowColor: "rgba(37,39,38,0.05810205419580419)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(240,242,249,1)"
  },
  rectangle8: {
    height: 319,
    width: 340,
    borderRadius: 30,
    backgroundColor: "rgba(251,251,251,1)"
  },
  videoThumbnail2: {
    height: 200,
    width: 336,
    backgroundColor: "transparent",
    marginLeft: 1
  },
  courseDetails2: {
    height: 80,
    width: 313,
    backgroundColor: "transparent",
    marginTop: 16,
    marginLeft: 17
  },
  courseActions1: {
    height: 42,
    width: 298,
    backgroundColor: "transparent",
    marginTop: 7,
    marginLeft: 23
  }
});

export default CourseVideoBox;
