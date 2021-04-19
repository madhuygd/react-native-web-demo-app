import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PlayButton from "./PlayButton";
import RepeatButton from "./RepeatButton";
import FavoriteButton from "./FavoriteButton";
import Toggle from "./Toggle";
import ListeningCircle from "./ListeningCircle";
import StatusBar from "./StatusBar";
import { FONT } from "../enums";

function Screen1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.lessonsList}>
        <Text style={styles.lessons}>Lessons</Text>
        <View style={styles.leassonOpened}>
          <View style={styles.lessonOpenedSecondaryBackgroundBox}>
            <View style={styles.lessonOpenedBackgroundBox2}>
              <View style={styles.voiceTrack}>
                <View style={styles.playButton2Row}>
                  <PlayButton style={styles.playButton2}></PlayButton>
                  <View style={styles.track2}>
                    <View style={styles.rectangle30Row}>
                      <View style={styles.rectangle30}></View>
                      <View style={styles.rectangle31}></View>
                      <View style={styles.rectangle32}></View>
                      <View style={styles.rectangle33}></View>
                      <View style={styles.rectangle34}></View>
                      <View style={styles.rectangle35}></View>
                      <View style={styles.rectangle36}></View>
                      <View style={styles.rectangle37}></View>
                      <View style={styles.rectangle38}></View>
                      <View style={styles.rectangle39}></View>
                      <View style={styles.rectangle40}></View>
                      <View style={styles.rectangle41}></View>
                      <View style={styles.rectangle42}></View>
                      <View style={styles.rectangle43}></View>
                      <View style={styles.rectangle44}></View>
                    </View>
                  </View>
                  <Text style={styles.style2}>3:50</Text>
                </View>
              </View>
              <Text style={styles.maryAndSamanthaAr}>
                Mary and Samantha arrived at the bus station early but waited
                until noon for the bus.
              </Text>
            </View>
            <View style={styles.repeatButtonRow}>
              <RepeatButton style={styles.repeatButton}></RepeatButton>
              <FavoriteButton style={styles.favoriteButton}></FavoriteButton>
              <Toggle style={styles.toggle}></Toggle>
            </View>
          </View>
        </View>
        <View style={styles.leasson01}>
          <View style={styles.lessonOpenedBackgroundBox1}>
            <Text style={styles.basicsOfVocabulary1}>
              Basics of vocabulary 1 (Voice only)
            </Text>
            <View style={styles.group31}>
              <View style={styles.playButton1Row}>
                <PlayButton style={styles.playButton1}></PlayButton>
                <View style={styles.track1}>
                  <View style={styles.rectangle15Row}>
                    <View style={styles.rectangle15}></View>
                    <View style={styles.rectangle16}></View>
                    <View style={styles.rectangle17}></View>
                    <View style={styles.rectangle18}></View>
                    <View style={styles.rectangle19}></View>
                    <View style={styles.rectangle20}></View>
                    <View style={styles.rectangle21}></View>
                    <View style={styles.rectangle22}></View>
                    <View style={styles.rectangle23}></View>
                    <View style={styles.rectangle24}></View>
                    <View style={styles.rectangle25}></View>
                    <View style={styles.rectangle26}></View>
                    <View style={styles.rectangle27}></View>
                    <View style={styles.rectangle28}></View>
                    <View style={styles.rectangle29}></View>
                  </View>
                </View>
                <Text style={styles.style1}>3:50</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.leasson02}>
          <View style={styles.lessonOpenedBackgroundBox}>
            <Text style={styles.basicsOfVocabulary}>
              Basics of vocabulary 2 (Voice only)
            </Text>
            <View style={styles.group3}>
              <View style={styles.playButtonRow}>
                <PlayButton style={styles.playButton}></PlayButton>
                <View style={styles.track}>
                  <View style={styles.rectangleRow}>
                    <View style={styles.rectangle}></View>
                    <View style={styles.rectangle1}></View>
                    <View style={styles.rectangle2}></View>
                    <View style={styles.rectangle3}></View>
                    <View style={styles.rectangle4}></View>
                    <View style={styles.rectangle5}></View>
                    <View style={styles.rectangle6}></View>
                    <View style={styles.rectangle7}></View>
                    <View style={styles.rectangle8}></View>
                    <View style={styles.rectangle9}></View>
                    <View style={styles.rectangle10}></View>
                    <View style={styles.rectangle11}></View>
                    <View style={styles.rectangle12}></View>
                    <View style={styles.rectangle13}></View>
                    <View style={styles.rectangle14}></View>
                  </View>
                </View>
                <Text style={styles.style}>1:50</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ListeningCircle style={styles.listeningCircle}></ListeningCircle>
      <StatusBar style={styles.statusBar}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  lessonsList: {
    height: 559,
    width: 340,
    marginTop: 259,
    marginLeft: 25
  },
  lessons: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(53,56,59,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_700,
    marginLeft: 138
  },
  leassonOpened: {
    height: 278,
    width: 340,
    marginTop: 23
  },
  lessonOpenedSecondaryBackgroundBox: {
    height: 278,
    width: 340,
    borderRadius: 30,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(240,242,249,1)"
  },
  lessonOpenedBackgroundBox2: {
    height: 203,
    width: 340,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  voiceTrack: {
    height: 50,
    width: 295,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 20
  },
  playButton2: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  track2: {
    height: 19,
    width: 179,
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 16
  },
  rectangle30: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginTop: 3
  },
  rectangle31: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10
  },
  rectangle32: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9
  },
  rectangle33: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle34: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9,
    marginTop: 3
  },
  rectangle35: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10
  },
  rectangle36: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9
  },
  rectangle37: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle38: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9,
    marginTop: 3
  },
  rectangle39: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle40: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle41: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle42: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 3
  },
  rectangle43: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle44: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle30Row: {
    height: 19,
    flexDirection: "row",
    flex: 1
  },
  style2: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 14,
    marginTop: 16
  },
  playButton2Row: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  maryAndSamanthaAr: {
    height: 78,
    width: 236,
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(131,134,141,1)",
    fontSize: 16,
    fontFamily: FONT.MANROPE_500,
    letterSpacing: -0.3200000013623919,
    marginTop: 30,
    marginLeft: 52
  },
  repeatButton: {
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  favoriteButton: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 10
  },
  toggle: {
    height: 40,
    width: 110,
    backgroundColor: "transparent",
    marginLeft: 90
  },
  repeatButtonRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 29,
    marginRight: 21
  },
  leasson01: {
    height: 110,
    width: 340,
    marginTop: 11
  },
  lessonOpenedBackgroundBox1: {
    height: 110,
    width: 340,
    borderRadius: 17.5,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)"
  },
  basicsOfVocabulary1: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(93,93,94,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 13,
    marginLeft: 22
  },
  group31: {
    height: 50,
    width: 295,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 20
  },
  playButton1: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  track1: {
    height: 19,
    width: 179,
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 16
  },
  rectangle15: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginTop: 3
  },
  rectangle16: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10
  },
  rectangle17: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9
  },
  rectangle18: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle19: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9,
    marginTop: 3
  },
  rectangle20: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10
  },
  rectangle21: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9
  },
  rectangle22: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle23: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9,
    marginTop: 3
  },
  rectangle24: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle25: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle26: {
    height: 15,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle27: {
    height: 13,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 3
  },
  rectangle28: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle29: {
    height: 19,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle15Row: {
    height: 19,
    flexDirection: "row",
    flex: 1
  },
  style1: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 14,
    marginTop: 16
  },
  playButton1Row: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  leasson02: {
    height: 110,
    width: 340,
    marginTop: 9
  },
  lessonOpenedBackgroundBox: {
    height: 110,
    width: 340,
    borderRadius: 17.5,
    shadowColor: "rgba(37,39,38,0.04747596153846154)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(251,251,251,1)"
  },
  basicsOfVocabulary: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(93,93,94,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginTop: 13,
    marginLeft: 23
  },
  group3: {
    height: 50,
    width: 294,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 20
  },
  playButton: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  track: {
    height: 10,
    width: 179,
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 20
  },
  rectangle: {
    height: 7,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginTop: 2
  },
  rectangle1: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 10
  },
  rectangle2: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(242,149,78,1)",
    marginLeft: 9
  },
  rectangle3: {
    height: 8,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 1
  },
  rectangle4: {
    height: 7,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9,
    marginTop: 2
  },
  rectangle5: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle6: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle7: {
    height: 8,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 1
  },
  rectangle8: {
    height: 7,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9,
    marginTop: 2
  },
  rectangle9: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle10: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangle11: {
    height: 8,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 1
  },
  rectangle12: {
    height: 7,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10,
    marginTop: 2
  },
  rectangle13: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 10
  },
  rectangle14: {
    height: 10,
    width: 3,
    borderRadius: 2,
    backgroundColor: "rgba(241,232,225,1)",
    marginLeft: 9
  },
  rectangleRow: {
    height: 10,
    flexDirection: "row",
    flex: 1
  },
  style: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(80,80,86,1)",
    fontSize: 14,
    fontFamily: FONT.MANROPE_600,
    letterSpacing: -0.2800000011920929,
    marginLeft: 16,
    marginTop: 16
  },
  playButtonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 2
  },
  listeningCircle: {
    height: 190,
    width: 190,
    backgroundColor: "transparent",
    marginTop: -767,
    marginLeft: 100
  },
  statusBar: {
    height: 44,
    backgroundColor: "transparent",
    marginTop: -241
  }
});

export default Screen1;
