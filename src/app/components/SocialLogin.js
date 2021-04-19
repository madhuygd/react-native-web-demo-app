import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FONT } from "../enums";

function SocialLogin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.gmailRow}>
          <View style={styles.gmail}>
            <View style={styles.googleBoxBacground}>
              <View style={styles.google1Row}>
                <Image
                  source={require("../../assets/images/2a8767910e2f03e5e35d3fce45612a4abd6c7c8b.png")}
                  resizeMode="cover"
                  style={styles.google1}
                ></Image>
                <Text style={styles.google}>Google</Text>
              </View>
            </View>
          </View>
          <View style={styles.facebook}>
            <View style={styles.facebookBoxBacground}>
              <View style={styles.facebook1Row}>
                <Image
                  source={require("../../assets/images/31177fee19f4238c2cfe1bc4172f0a918a564598.png")}
                  resizeMode="cover"
                  style={styles.facebook1}
                ></Image>
                <Text style={styles.facebook2}>Facebook</Text>
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
    height: 56,
    width: 333,
    flexDirection: "row"
  },
  gmail: {
    height: 56,
    width: 159
  },
  googleBoxBacground: {
    height: 56,
    width: 159,
    borderWidth: 1,
    borderColor: "rgba(225,225,225,1)",
    borderRadius: 16,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)",
    flexDirection: "row"
  },
  google1: {
    height: 20,
    width: 20,
    backgroundColor: "transparent"
  },
  google: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginLeft: 10
  },
  google1Row: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 52,
    marginLeft: 37,
    marginTop: 19
  },
  facebook: {
    height: 56,
    width: 159,
    marginLeft: 15
  },
  facebookBoxBacground: {
    height: 56,
    width: 159,
    borderWidth: 1,
    borderColor: "rgba(225,225,225,1)",
    borderRadius: 16,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)",
    flexDirection: "row"
  },
  facebook1: {
    height: 34,
    width: 33,
    backgroundColor: "transparent"
  },
  facebook2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginLeft: 7,
    marginTop: 7
  },
  facebook1Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 38,
    marginLeft: 29,
    marginTop: 12
  },
  gmailRow: {
    height: 56,
    flexDirection: "row",
    flex: 1
  }
});

export default SocialLogin;
