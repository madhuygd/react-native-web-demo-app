import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function FavoriteButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle2}>
          <View style={styles.heartIcon}>
            <Svg viewBox="-0.8 -0.8 18.1 16.2" style={styles.heartIconPath}>
              <Path
                strokeWidth={1.6}
                fill="transparent"
                stroke="rgba(109,110,113,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M14.55 1.95 C13.82 1.21 12.82 0.80 11.78 0.80 C10.74 0.80 9.74 1.21 9.01 1.95 L8.25 2.70 L7.50 1.95 C5.96 0.42 3.48 0.42 1.95 1.95 C0.42 3.48 0.42 5.96 1.95 7.50 L2.70 8.25 L8.25 13.80 L13.80 8.25 L14.55 7.50 C15.29 6.76 15.70 5.76 15.70 4.72 C15.70 3.68 15.29 2.68 14.55 1.95 Z"
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
    height: 40,
    width: 40
  },
  rectangle2: {
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
  heartIcon: {
    height: 13,
    width: 15,
    marginTop: 14,
    marginLeft: 13
  },
  heartIconPath: {
    height: 16,
    width: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -1,
    marginLeft: -1
  }
});

export default FavoriteButton;
