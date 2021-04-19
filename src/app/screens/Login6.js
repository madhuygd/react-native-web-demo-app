import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import SocialLogin from "../components/SocialLogin";
import ButtonButton from "../components/ButtonButton";
// import { Center } from "@builderx/utils";
import StatusBar from "../components/StatusBar";
import { FONT } from "../enums";

function Login6(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <View style={styles.loginBackgroundBox}>
              <Text style={styles.text}>LOGIN</Text>
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
                            willsmith@iloveu.com
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
          <ButtonButton style={styles.buttonButton2}></ButtonButton>
          <View style={styles.group}>
            <View style={styles.rect2}>
              <Text style={styles.login2}>LOGIN</Text>
              <View style={styles.rect3}>
                <View style={styles.rect10}>
                  <View style={styles.rect11Stack}>
                    <View style={styles.rect11}>
                      <View style={styles.rect12}>
                        <View style={styles.rect13Row}>
                          <View style={styles.rect13}>
                            <View style={styles.path4Stack}>
                              <Svg
                                viewBox="-0.8 -0.8 18.2 15.2"
                                style={styles.path4}
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
                                style={styles.path5}
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
                          <Text style={styles.willsmithIloveuCom2}>
                            willsmith@iloveu.com
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rect14}>
                      <View style={styles.rect15}>
                        <Text style={styles.emailId2}>Email ID</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rect4}>
                  <View style={styles.rect5Stack}>
                    <View style={styles.rect5}>
                      <View style={styles.rect6Row}>
                        <View style={styles.rect6}>
                          <View style={styles.rect7Stack}>
                            <View style={styles.rect7}></View>
                            <Svg
                              viewBox="-0.8 -0.8 10.98 10.2"
                              style={styles.path3}
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
                        <Text style={styles.text3}>*********</Text>
                      </View>
                    </View>
                    <View style={styles.rect8}>
                      <View style={styles.rect9}>
                        <Text style={styles.password2}>Password</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.forgetPassword2}>Forget Password?</Text>
              <Text style={styles.text2}>Login with Social Media</Text>
              <SocialLogin style={styles.socialLogin2}></SocialLogin>
            </View>
          </View>
          <View style={styles.group2}>
            <View style={styles.rect16}>
              <Text style={styles.text6}>LOGIN</Text>
              <View style={styles.rect17}>
                <View style={styles.rect24}>
                  <View style={styles.rect25Stack}>
                    <View style={styles.rect25}>
                      <View style={styles.rect26}>
                        <View style={styles.rect27Row}>
                          <View style={styles.rect27}>
                            <View style={styles.path7Stack}>
                              <Svg
                                viewBox="-0.8 -0.8 18.2 15.2"
                                style={styles.path7}
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
                                style={styles.path8}
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
                          <Text style={styles.willsmithIloveuCom3}>
                            willsmith@iloveu.com
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rect28}>
                      <View style={styles.rect29}>
                        <Text style={styles.emailId3}>Email ID</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rect18}>
                  <View style={styles.rect19Stack}>
                    <View style={styles.rect19}>
                      <View style={styles.rect20Row}>
                        <View style={styles.rect20}>
                          <View style={styles.rect21Stack}>
                            <View style={styles.rect21}></View>
                            <Svg
                              viewBox="-0.8 -0.8 10.98 10.2"
                              style={styles.path6}
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
                        <Text style={styles.text5}>*********</Text>
                      </View>
                    </View>
                    <View style={styles.rect22}>
                      <View style={styles.rect23}>
                        <Text style={styles.password3}>Password</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.forgetPassword3}>Forget Password?</Text>
              <Text style={styles.text4}>Login with Social Media</Text>
              <SocialLogin style={styles.socialLogin3}></SocialLogin>
            </View>
          </View>
          <ButtonButton style={styles.buttonButton3}></ButtonButton>
          <ButtonButton style={styles.buttonButton4}></ButtonButton>
          <View style={styles.group3}>
            <View style={styles.rect30}>
              <Text style={styles.login3}>LOGIN</Text>
              <View style={styles.rect31}>
                <View style={styles.rect38}>
                  <View style={styles.rect39}>
                    <View style={styles.rect40}>
                      <Text style={styles.name}>Name</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.group4Stack}>
                  <View style={styles.group4}>
                    <View style={styles.rect42}>
                      <View style={styles.rect43}>
                        <Text style={styles.emailId42}>Email Id</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.group5}>
                    <View style={styles.rect45}>
                      <View style={styles.rect46}>
                        <Text style={styles.phoneNumber}>Phone Number</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rect32Stack}>
                  <View style={styles.rect32}>
                    <View style={styles.rect33}>
                      <Text style={styles.confirmPassword}>
                        Confirm Password
                      </Text>
                    </View>
                  </View>
                  <View style={styles.group6}>
                    <View style={styles.rect48}>
                      <Text style={styles.password42}>Password</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.text6}>Already Sign Up Login</Text>
            </View>
          </View>
          {/* <Center horizontal>
            <ButtonButton style={styles.buttonButton5}></ButtonButton>
          </Center> */}
        </View>
        <Image
          source={require("../../assets/images/Logo-White.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <StatusBar style={styles.statusBar}></StatusBar>
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
    top: 40,
    left: 0,
    height: 512,
    right: 0
  },
  loginBackgroundBox: {
    height: 551,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  text: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_800,
    marginTop: 26,
    marginLeft: 158
  },
  inputFields: {
    height: 163,
    width: 327,
    marginTop: 27,
    marginLeft: 24
  },
  email: {
    height: 67,
    width: 327
  },
  selectLanguage: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 58,
    width: 327
  },
  inputBackgroundBox1: {
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  mail: {
    height: 12,
    width: 14,
    marginTop: 5
  },
  path1: {
    position: "absolute",
    height: 15,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path2: {
    position: "absolute",
    height: 8,
    width: 17,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path1Stack: {
    width: 17,
    height: 15,
    marginTop: -1,
    marginLeft: -1
  },
  willsmithIloveuCom: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 11
  },
  mailRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 143,
    marginLeft: 19,
    marginTop: 18
  },
  label1: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  lebelBackgroundBox1: {
    height: 19,
    width: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  selectLanguageStack: {
    width: 327,
    height: 68
  },
  password: {
    height: 66,
    width: 327,
    marginTop: 29
  },
  inputBackgroundBox: {
    position: "absolute",
    top: 9,
    left: 0,
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  lock: {
    height: 15,
    width: 13
  },
  rectangle: {
    position: "absolute",
    top: 8,
    left: 0,
    height: 8,
    width: 13,
    borderWidth: 1.6,
    borderColor: "rgba(80,80,86,1)",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  path: {
    position: "absolute",
    height: 10,
    width: 11,
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangleStack: {
    width: 13,
    height: 16,
    marginTop: -1
  },
  style: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  lockRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 227,
    marginLeft: 19,
    marginTop: 21
  },
  label: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  lebelBackgroundBox: {
    height: 19,
    width: 71,
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
    width: 327,
    height: 67
  },
  forgetPassword: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 21,
    marginLeft: 245
  },
  loginWithSocialMe: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginTop: 118,
    marginLeft: 117
  },
  socialLogin: {
    height: 54,
    width: 320,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  buttonButton: {
    position: "absolute",
    top: 354,
    left: 24,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  buttonButton2: {
    position: "absolute",
    top: 354,
    left: 24,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  group: {
    position: "absolute",
    top: 40,
    left: 0,
    height: 512,
    right: 0
  },
  rect2: {
    height: 551,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  login2: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_800,
    marginTop: 26,
    marginLeft: 158
  },
  rect3: {
    height: 163,
    width: 327,
    marginTop: 27,
    marginLeft: 24
  },
  rect10: {
    height: 67,
    width: 327
  },
  rect11: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 58,
    width: 327
  },
  rect12: {
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect13: {
    height: 12,
    width: 14,
    marginTop: 5
  },
  path4: {
    position: "absolute",
    height: 15,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path5: {
    position: "absolute",
    height: 8,
    width: 17,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path4Stack: {
    width: 17,
    height: 15,
    marginTop: -1,
    marginLeft: -1
  },
  willsmithIloveuCom2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 11
  },
  rect13Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 143,
    marginLeft: 19,
    marginTop: 18
  },
  rect14: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  rect15: {
    height: 19,
    width: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  rect11Stack: {
    width: 327,
    height: 68
  },
  rect4: {
    height: 66,
    width: 327,
    marginTop: 29
  },
  rect5: {
    position: "absolute",
    top: 9,
    left: 0,
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect6: {
    height: 15,
    width: 13
  },
  rect7: {
    position: "absolute",
    top: 8,
    left: 0,
    height: 8,
    width: 13,
    borderWidth: 1.6,
    borderColor: "rgba(80,80,86,1)",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  path3: {
    position: "absolute",
    height: 10,
    width: 11,
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rect7Stack: {
    width: 13,
    height: 16,
    marginTop: -1
  },
  text3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  rect6Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 227,
    marginLeft: 19,
    marginTop: 21
  },
  rect8: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  rect9: {
    height: 19,
    width: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  password2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 6
  },
  rect5Stack: {
    width: 327,
    height: 67
  },
  forgetPassword2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 21,
    marginLeft: 245
  },
  text2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginTop: 118,
    marginLeft: 117
  },
  socialLogin2: {
    height: 54,
    width: 320,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  group2: {
    position: "absolute",
    top: 40,
    left: 0,
    height: 512,
    right: 0
  },
  rect16: {
    height: 551,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  text6: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,100,0,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 277,
    alignSelf: "center"
  },
  rect17: {
    height: 163,
    width: 327,
    marginTop: 27,
    marginLeft: 24
  },
  rect24: {
    height: 67,
    width: 327
  },
  rect25: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 58,
    width: 327
  },
  rect26: {
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect27: {
    height: 12,
    width: 14,
    marginTop: 5
  },
  path7: {
    position: "absolute",
    height: 15,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path8: {
    position: "absolute",
    height: 8,
    width: 17,
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path7Stack: {
    width: 17,
    height: 15,
    marginTop: -1,
    marginLeft: -1
  },
  willsmithIloveuCom3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 11
  },
  rect27Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 143,
    marginLeft: 19,
    marginTop: 18
  },
  rect28: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  rect29: {
    height: 19,
    width: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  rect25Stack: {
    width: 327,
    height: 68
  },
  rect18: {
    height: 66,
    width: 327,
    marginTop: 29
  },
  rect19: {
    position: "absolute",
    top: 9,
    left: 0,
    height: 58,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect20: {
    height: 15,
    width: 13
  },
  rect21: {
    position: "absolute",
    top: 8,
    left: 0,
    height: 8,
    width: 13,
    borderWidth: 1.6,
    borderColor: "rgba(80,80,86,1)",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  path6: {
    position: "absolute",
    height: 10,
    width: 11,
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rect21Stack: {
    width: 13,
    height: 16,
    marginTop: -1
  },
  text5: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 13
  },
  rect20Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 227,
    marginLeft: 19,
    marginTop: 21
  },
  rect22: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 19,
    width: 71
  },
  rect23: {
    height: 19,
    width: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  password3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginLeft: 6
  },
  rect19Stack: {
    width: 327,
    height: 67
  },
  forgetPassword3: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_REGULAR,
    letterSpacing: -0.2800000011920929,
    marginTop: 21,
    marginLeft: 245
  },
  text4: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(106,106,109,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.2800000011920929,
    marginTop: 118,
    marginLeft: 117
  },
  socialLogin3: {
    height: 54,
    width: 320,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  buttonButton3: {
    position: "absolute",
    top: 354,
    left: 24,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  buttonButton4: {
    position: "absolute",
    top: 354,
    left: 24,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  group3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 552,
    right: 0
  },
  rect30: {
    height: 594,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  login3: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 20,
    fontFamily: FONT.MANROPE_800,
    marginTop: 28,
    alignSelf: "center"
  },
  rect31: {
    height: 175,
    width: 327,
    marginTop: 4,
    marginLeft: 24
  },
  rect38: {
    height: 73
  },
  rect39: {
    height: 62,
    width: 327,
    marginTop: 10
  },
  rect40: {
    height: 62,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  name: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 22,
    marginLeft: 21
  },
  group4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 73,
    right: 0
  },
  rect42: {
    height: 62,
    width: 327,
    marginTop: 10,
    alignSelf: "center"
  },
  rect43: {
    height: 62,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  emailId42: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 22,
    marginLeft: 21
  },
  group5: {
    position: "absolute",
    top: 72,
    left: 0,
    height: 73,
    right: 0
  },
  rect45: {
    height: 62,
    width: 327,
    marginTop: 10
  },
  rect46: {
    height: 62,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  phoneNumber: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 22,
    marginLeft: 21
  },
  group4Stack: {
    height: 145
  },
  rect32: {
    position: "absolute",
    left: 0,
    height: 72,
    top: 71,
    right: 0
  },
  rect33: {
    height: 62,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 9
  },
  confirmPassword: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 21
  },
  group6: {
    position: "absolute",
    left: 0,
    height: 72,
    top: 0,
    right: 0
  },
  rect48: {
    height: 62,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(207,207,213,1)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 9
  },
  password42: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 23,
    marginLeft: 21
  },
  rect32Stack: {
    height: 143
  },
  buttonButton5: {
    position: "absolute",
    top: 436,
    height: 58,
    width: 327,
    backgroundColor: "transparent"
  },
  rectStack: {
    top: 184,
    left: 0,
    height: 552,
    position: "absolute",
    right: 0
  },
  image: {
    top: 0,
    width: 306,
    height: 215,
    position: "absolute",
    left: 35
  },
  rectStackStack: {
    height: 736,
    marginTop: 42
  },
  statusBar: {
    height: 42,
    width: 361,
    backgroundColor: "transparent",
    marginTop: -778
  }
});

export default Login6;
