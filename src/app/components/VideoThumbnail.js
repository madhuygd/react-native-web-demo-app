import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import VideoController from "./VideoController";
import PlayButton2 from "./PlayButton2";

function VideoThumbnail(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.videoThumbnail1}>
        <View style={styles.videoImageStack}>
          <View style={styles.videoImage}>
            <ImageBackground
              style={styles.mask1}
              imageStyle={styles.mask1_imageStyle}
              source={require("../../assets/images/Gradient_B0bkIx1.png")}
            >
              <ImageBackground
                source={require("../../assets/images/qtheich15xcwswkwwwo0g800o8cwkc?fileName=91cd03216a52c88cf6c9ef3b5d1e7b5f9d84b5c2.png")}
                resizeMode="cover"
                style={styles.courseImage1}
                imageStyle={styles.courseImage1_imageStyle}
              >
                <VideoController
                  style={styles.videoController1}
                ></VideoController>
              </ImageBackground>
            </ImageBackground>
          </View>
          <PlayButton2 style={styles.playButton21}></PlayButton2>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoThumbnail1: {
    height: 200,
    width: 336
  },
  videoImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 200,
    width: 336
  },
  mask1: {
    height: 200,
    width: 336,
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
  mask1_imageStyle: {},
  courseImage1: {
    height: 227,
    width: 432,
    backgroundColor: "transparent",
    marginTop: -17,
    marginLeft: -19
  },
  courseImage1_imageStyle: {},
  videoController1: {
    height: 17,
    width: 312,
    backgroundColor: "transparent",
    marginTop: 189,
    marginLeft: 30
  },
  playButton21: {
    position: "absolute",
    top: 72,
    left: 143,
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  videoImageStack: {
    width: 336,
    height: 200
  }
});

export default VideoThumbnail;
