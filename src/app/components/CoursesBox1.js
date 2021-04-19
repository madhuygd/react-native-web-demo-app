import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import RepeatButton from "./RepeatButton";
import FavoriteButton from "./FavoriteButton";
import DownloadButton from "./DownloadButton";
import PlayButton2 from "./PlayButton2";
import { FONT } from "../enums";

function CoursesBox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.coursesBox11}>
          <Text style={styles.mostPopularCourses}>Most popular courses</Text>
          <View style={styles.rectangle3Stack}>
            <View style={styles.rectangle3}>
              <View style={styles.rectangle4}>
                <View style={styles.courseDetails}>
                  <Text style={styles.basicOfEnglish}>Basic of english</Text>
                  <View style={styles.lessonsRow}>
                    <Text style={styles.lessons}>10 Lessons</Text>
                    <View style={styles.time1}>
                      <View style={styles.group}>
                        <View style={styles.clockRow}>
                          <View style={styles.clock}>
                            <View style={styles.oval5Stack}>
                              <Svg
                                viewBox="-0.75 -0.75 16 16"
                                style={styles.oval5}
                              >
                                <Path
                                  strokeWidth={1.5}
                                  fill="transparent"
                                  stroke="rgba(111,111,111,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M7.25 13.75 C10.84 13.75 13.75 10.84 13.75 7.25 C13.75 3.66 10.84 0.75 7.25 0.75 C3.66 0.75 0.75 3.66 0.75 7.25 C0.75 10.84 3.66 13.75 7.25 13.75 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="-0.75 -0.75 5.6 8.2"
                                style={styles.path21}
                              >
                                <Path
                                  strokeWidth={1.5}
                                  fill="transparent"
                                  stroke="rgba(111,111,111,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M0.75 0.75 L0.75 4.65 L3.35 5.95 "
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                          <Text style={styles.style2}>1:30:20</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.repeatButton1Row}>
                <RepeatButton style={styles.repeatButton1}></RepeatButton>
                <FavoriteButton style={styles.favoriteButton1}></FavoriteButton>
                <DownloadButton style={styles.downloadButton1}></DownloadButton>
              </View>
            </View>
            <View style={styles.videoThumbnail}>
              <View style={styles.courseImageStack}>
                <View style={styles.courseImage}>
                  <ImageBackground
                    style={styles.mask}
                    imageStyle={styles.mask_imageStyle}
                    source={require("../../assets/images/Gradient_KKzFH1N.png")}
                  >
                    <Image
                      source={require("../../assets/images/qtheich15xcwswkwwwo0g800o8cwkc?fileName=91cd03216a52c88cf6c9ef3b5d1e7b5f9d84b5c2.png")}
                      resizeMode="cover"
                      style={styles.bitmap}
                    ></Image>
                  </ImageBackground>
                </View>
                <PlayButton2 style={styles.playButton2}></PlayButton2>
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
    height: 317,
    width: 302
  },
  coursesBox11: {
    height: 317,
    width: 302
  },
  mostPopularCourses: {
    backgroundColor: "transparent",
    color: "rgba(61,61,61,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    marginLeft: 6
  },
  rectangle3: {
    position: "absolute",
    top: 10,
    left: 0,
    height: 270,
    width: 302,
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
  rectangle4: {
    height: 203,
    width: 302,
    borderRadius: 30,
    backgroundColor: "rgba(251,251,251,1)"
  },
  courseDetails: {
    height: 50,
    width: 142,
    marginTop: 142,
    marginLeft: 23
  },
  basicOfEnglish: {
    backgroundColor: "transparent",
    color: "rgba(53,56,59,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_600,
    marginLeft: 1
  },
  lessons: {
    height: 24,
    width: 77,
    backgroundColor: "transparent",
    color: "rgba(111,111,111,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600
  },
  time1: {
    height: 17,
    width: 61,
    marginLeft: 4,
    marginTop: 2
  },
  group: {
    height: 17,
    width: 61,
    flexDirection: "row"
  },
  clock: {
    height: 13,
    width: 13,
    marginTop: 2
  },
  oval5: {
    position: "absolute",
    height: 16,
    width: 16,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path21: {
    position: "absolute",
    height: 8,
    width: 6,
    top: 3,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval5Stack: {
    width: 16,
    height: 16,
    marginTop: -1,
    marginLeft: -1
  },
  style2: {
    backgroundColor: "transparent",
    color: "rgba(111,111,111,1)",
    fontSize: 12,
    fontFamily: FONT.MANROPE_600,
    marginLeft: 5
  },
  clockRow: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  lessonsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 8
  },
  repeatButton1: {
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  favoriteButton1: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 9
  },
  downloadButton1: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 134,
    marginTop: 2
  },
  repeatButton1Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 25,
    marginRight: 14
  },
  videoThumbnail: {
    position: "absolute",
    top: 0,
    left: 2,
    height: 139,
    width: 300
  },
  courseImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 139,
    width: 300
  },
  mask: {
    height: 139,
    width: 300,
    borderRadius: 20,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  mask_imageStyle: {},
  bitmap: {
    height: 176,
    width: 335,
    backgroundColor: "transparent",
    marginTop: -17
  },
  playButton2: {
    position: "absolute",
    top: 46,
    left: 125,
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  courseImageStack: {
    width: 300,
    height: 139
  },
  rectangle3Stack: {
    width: 302,
    height: 280,
    marginTop: 20
  }
});

export default CoursesBox1;
