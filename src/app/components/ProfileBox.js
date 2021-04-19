import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FONT } from "../enums";

function ProfileBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.profileBackgroundBox}>
          <View style={styles.profileDetails}>
            <View style={styles.helloColumnRow}>
              <View style={styles.helloColumn}>
                <Text style={styles.hello}>Hello</Text>
                <Text style={styles.willSmith}>Will Smith</Text>
              </View>
              <View style={styles.profileImage}>
                <View style={styles.profileBackgroundBox1}>
                  <Image
                    source={require("../../assets/images/2e1ed736d17ac6fcb2d1e8e6d4d7c72e9033fd7b.png")}
                    resizeMode="cover"
                    style={styles.profileImage1}
                  ></Image>
                </View>
              </View>
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
    height: 75,
    width: 340
  },
  profileBackgroundBox: {
    height: 75,
    width: 340,
    borderWidth: 1,
    borderColor: "rgba(229,229,229,1)",
    borderRadius: 16,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)"
  },
  profileDetails: {
    height: 50,
    width: 309,
    marginTop: 12,
    marginLeft: 16
  },
  hello: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(99,102,104,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500
  },
  willSmith: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(77,79,81,1)",
    fontSize: 18,
    fontFamily: FONT.MANROPE_600,
    marginTop: 1
  },
  helloColumn: {
    width: 83,
    marginTop: 3,
    marginBottom: 7
  },
  profileImage: {
    height: 50,
    width: 50,
    marginLeft: 176
  },
  profileBackgroundBox1: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: "rgba(209,209,209,1)",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  profileImage1: {
    height: 46,
    width: 62,
    backgroundColor: "transparent",
    marginLeft: -6
  },
  helloColumnRow: {
    height: 50,
    flexDirection: "row"
  }
});

export default ProfileBox;
