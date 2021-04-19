import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function VideoProgress(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle5}>
          <View style={styles.rectangle6}></View>
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
    height: 4,
    width: 200
  },
  rectangle5: {
    height: 4,
    width: 200,
    borderRadius: 2,
    backgroundColor: "rgba(232,230,230,1)"
  },
  rectangle6: {
    height: 4,
    width: 138,
    borderRadius: 5,
    backgroundColor: "rgba(246,179,88,1)"
  }
});

export default VideoProgress;
