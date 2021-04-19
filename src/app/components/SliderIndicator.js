import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function SliderIndicator(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.activeBoxRow}>
          <View style={styles.activeBox}></View>
          <View style={styles.style1}></View>
          <View style={styles.style}></View>
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
    height: 6,
    width: 56,
    flexDirection: "row"
  },
  activeBox: {
    height: 6,
    width: 20,
    borderRadius: 8,
    backgroundColor: "rgba(242,149,78,1)"
  },
  style1: {
    height: 6,
    width: 6,
    borderRadius: 8,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 12
  },
  style: {
    height: 6,
    width: 6,
    borderRadius: 8,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 12
  },
  activeBoxRow: {
    height: 6,
    flexDirection: "row",
    flex: 1
  }
});

export default SliderIndicator;
