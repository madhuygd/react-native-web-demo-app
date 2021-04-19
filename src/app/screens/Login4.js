import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ButtonButton from "../components/ButtonButton";
import { FONT } from "../enums";

function Login4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../../assets/images/Logo-Black1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect}>
          <View style={styles.loginBackgroundBox}>
            <Text style={styles.singUp}>SING UP</Text>
            <View style={styles.inputFields}>
              <View style={styles.emailStack}>
                <View style={styles.email}></View>
                <View style={styles.group4}>
                  <View style={styles.rect5}>
                    <Text style={styles.name}>Name</Text>
                  </View>
                </View>
                <View style={styles.group5}>
                  <View style={styles.rect6}>
                    <Text style={styles.emailId}>Email Id</Text>
                  </View>
                </View>
              </View>
              <View style={styles.group6}>
                <View style={styles.rect7}>
                  <Text style={styles.phoneNumber}>Phone Number</Text>
                </View>
              </View>
              <View style={styles.group7Stack}>
                <View style={styles.group7}>
                  <View style={styles.rect8}>
                    <Text style={styles.password24}>Password</Text>
                  </View>
                </View>
                <View style={styles.group8}>
                  <View style={styles.rect9}>
                    <Text style={styles.confirmPassword}>Confirm Password</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.loginWithSocialMe}>Already Sign Up Login</Text>
          </View>
        </View>
        <ButtonButton style={styles.buttonButton}></ButtonButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  image: {
    top: 0,
    left: 32,
    width: 311,
    height: 251,
    position: "absolute"
  },
  rect: {
    position: "absolute",
    top: 199,
    height: 594,
    width: 375,
    left: 0
  },
  loginBackgroundBox: {
    width: 382,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1,
    marginLeft: -4
  },
  singUp: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_800,
    marginTop: 30,
    marginLeft: 151
  },
  inputFields: {
    height: 189,
    width: 327,
    marginTop: 20,
    marginLeft: 29
  },
  email: {
    position: "absolute",
    top: 16,
    left: 0,
    height: 78,
    width: 327
  },
  group4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 73,
    right: 0
  },
  rect5: {
    height: 62,
    borderWidth: 1,
    borderColor: "rgba(98,98,98,1)",
    borderRadius: 15,
    backgroundColor: "rgba(31,31,31,1)",
    marginTop: 10
  },
  name: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 25
  },
  group5: {
    position: "absolute",
    top: 73,
    left: 0,
    height: 73,
    right: 0
  },
  rect6: {
    height: 62,
    borderWidth: 1,
    borderColor: "rgba(98,98,98,1)",
    borderRadius: 15,
    backgroundColor: "rgba(31,31,31,1)",
    marginTop: 10
  },
  emailId: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 25
  },
  emailStack: {
    height: 146,
    marginTop: -16
  },
  group6: {
    height: 73
  },
  rect7: {
    height: 62,
    borderWidth: 1,
    borderColor: "rgba(98,98,98,1)",
    borderRadius: 15,
    backgroundColor: "rgba(31,31,31,1)",
    marginTop: 10
  },
  phoneNumber: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 25
  },
  group7: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 73,
    right: 0
  },
  rect8: {
    height: 59,
    borderWidth: 1,
    borderColor: "rgba(98,98,98,1)",
    borderRadius: 15,
    backgroundColor: "rgba(31,31,31,1)",
    marginTop: 10
  },
  password24: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 25
  },
  group8: {
    position: "absolute",
    top: 69,
    left: 0,
    height: 73,
    right: 0
  },
  rect9: {
    height: 59,
    borderWidth: 1,
    borderColor: "rgba(98,98,98,1)",
    borderRadius: 15,
    backgroundColor: "rgba(31,31,31,1)",
    marginTop: 10
  },
  confirmPassword: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 25
  },
  group7Stack: {
    height: 142
  },
  loginWithSocialMe: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,100,0,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 249,
    marginLeft: 90
  },
  buttonButton: {
    position: "absolute",
    top: 639,
    left: 24,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  imageStack: {
    width: 375,
    height: 793,
    marginTop: 22
  }
});

export default Login4;
