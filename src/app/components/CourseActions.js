import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RepeatButton from "./RepeatButton";
import FavoriteButton from "./FavoriteButton";
import DownloadButton from "./DownloadButton";

function CourseActions(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.repeatButton2Row}>
          <RepeatButton style={styles.repeatButton2}></RepeatButton>
          <FavoriteButton style={styles.favoriteButton2}></FavoriteButton>
          <DownloadButton style={styles.downloadButton2}></DownloadButton>
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
    height: 42,
    width: 298,
    flexDirection: "row"
  },
  repeatButton2: {
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  favoriteButton2: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 9,
    marginTop: 1
  },
  downloadButton2: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 169,
    marginTop: 2
  },
  repeatButton2Row: {
    height: 42,
    flexDirection: "row",
    flex: 1
  }
});

export default CourseActions;
