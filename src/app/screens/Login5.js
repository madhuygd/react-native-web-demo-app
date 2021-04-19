import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import SocialLogin from "../components/SocialLogin";
import ButtonButton from "../components/ButtonButton";
import { FONT } from "../enums";

function Login5(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.loginBackgroundBox}>
            <Text style={styles.login2}>LOGIN</Text>
            <View style={styles.inputFields}>
              <View style={styles.email}>
                <View style={styles.selectLanguageStack}>
                  <View style={styles.selectLanguage}>
                    <View style={styles.inputBackgroundBox1}>
                      <View style={styles.mailRow}>
                        <View style={styles.mail}>
                          <View style={styles.path1Stack}>
                            <Svg
                              viewBox="-0.8 -0.8 18.2 15.2"
                              style={styles.path1}
                            >
                              <Path
                                strokeWidth={1.6}
                                fill="transparent"
                                stroke="rgba(80,80,86,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.30 0.80 L14.30 0.80 C15.13 0.80 15.80 1.48 15.80 2.30 L15.80 11.30 C15.80 12.13 15.13 12.80 14.30 12.80 L2.30 12.80 C1.48 12.80 0.80 12.13 0.80 11.30 L0.80 2.30 C0.80 1.48 1.48 0.80 2.30 0.80 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.8 -0.8 18.2 8.45"
                              style={styles.path2}
                            >
                              <Path
                                strokeWidth={1.6}
                                fill="transparent"
                                stroke="rgba(80,80,86,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M15.80 0.80 L8.30 6.05 L0.80 0.80 "
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <Text style={styles.willsmithIloveuCom}>
                          Email ID @domainname.com
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.label1}>
                    <View style={styles.lebelBackgroundBox1}>
                      <Text style={styles.emailId}>Email ID</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.password}>
                <View style={styles.inputBackgroundBoxStack}>
                  <View style={styles.inputBackgroundBox}>
                    <View style={styles.lockRow}>
                      <View style={styles.lock}>
                        <View style={styles.rectangleStack}>
                          <View style={styles.rectangle}></View>
                          <Svg
                            viewBox="-0.8 -0.8 10.98 10.2"
                            style={styles.path}
                          >
                            <Path
                              strokeWidth={1.6}
                              fill="transparent"
                              stroke="rgba(80,80,86,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.80 7.80 L0.80 4.69 C0.80 2.54 2.54 0.80 4.69 0.80 C6.84 0.80 8.58 2.54 8.58 4.69 L8.58 7.80 "
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                      <Text style={styles.style}>*********</Text>
                    </View>
                  </View>
                  <View style={styles.label}>
                    <View style={styles.lebelBackgroundBox}>
                      <Text style={styles.password1}>Password</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
            <Text style={styles.loginWithSocialMe}>
              Login with Social Media
            </Text>
            <SocialLogin style={styles.socialLogin}></SocialLogin>
          </View>
        </View>
        <ButtonButton style={styles.buttonButton}></ButtonButton>
      </View>
      <Image
        source={require("../../assets/images/Logo-White.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1
  },
  rect: {
    position: "absolute",
    top: 0,
    height: 543,
    width: 368,
    left: 0
  },
  loginBackgroundBox: {
    height: 559,
    width: 374,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -6
  },
  login2: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(1,0,0,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_800,
    marginTop: 28,
    marginLeft: 161
  },
  inputFields: {
    height: 172,
    width: 321,
    marginTop: 15,
    marginLeft: 30
  },
  email: {
    height: 71,
    width: 321
  },
  selectLanguage: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 61,
    width: 321
  },
  inputBackgroundBox1: {
    height: 61,
    width: 321,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(253,253,253,1)",
    flexDirection: "row"
  },
  mail: {
    height: 12,
    width: 14,
    marginTop: 5
  },
  path1: {
    position: "absolute",
    height: 16,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path2: {
    position: "absolute",
    height: 9,
    width: 17,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path1Stack: {
    width: 17,
    height: 16,
    marginTop: -1,
    marginLeft: -1
  },
  willsmithIloveuCom: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(103,103,108,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 10
  },
  mailRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 98,
    marginLeft: 19,
    marginTop: 19
  },
  label1: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 20,
    width: 70,
    backgroundColor: "rgba(0,0,0,1)",
    overflow: "visible"
  },
  lebelBackgroundBox1: {
    height: 20,
    width: 70,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 12
  },
  selectLanguageStack: {
    width: 321,
    height: 71
  },
  password: {
    height: 70,
    marginTop: 31
  },
  inputBackgroundBox: {
    position: "absolute",
    top: 9,
    left: 0,
    height: 61,
    width: 321,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  lock: {
    height: 16,
    width: 13
  },
  rectangle: {
    position: "absolute",
    top: 8,
    left: 0,
    height: 9,
    width: 13,
    borderWidth: 1.6,
    borderColor: "rgba(80,80,86,1)",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  path: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangleStack: {
    width: 13,
    height: 17,
    marginTop: -1
  },
  style: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 12
  },
  lockRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 222,
    marginLeft: 19,
    marginTop: 23
  },
  label: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 20,
    width: 70
  },
  lebelBackgroundBox: {
    height: 20,
    width: 70,
    backgroundColor: "rgba(255,255,255,1)"
  },
  password1: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 6
  },
  inputBackgroundBoxStack: {
    width: 321,
    height: 70
  },
  forgetPassword: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 17,
    marginLeft: 243
  },
  loginWithSocialMe: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginTop: 102,
    marginLeft: 115
  },
  socialLogin: {
    height: 57,
    width: 314,
    backgroundColor: "transparent",
    marginTop: 16,
    marginLeft: 30
  },
  buttonButton: {
    position: "absolute",
    top: 305,
    left: 17,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  rectStack: {
    width: 368,
    height: 543,
    marginTop: 270,
    marginLeft: 7
  },
  image1: {
    width: 306,
    height: 215,
    marginTop: -771,
    marginLeft: 35
  }
});

export default Login5;
