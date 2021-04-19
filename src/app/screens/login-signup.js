import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";
import SocialLogin from "../components/SocialLogin";
import ButtonButton from "../components/ButtonButton";
import { FONT } from "../enums";
import { useTranslation } from 'react-i18next';
import * as logo from "../../assets/images/Logo-Black1.png";


export function LoginSignup(props) {
    const [text, onChangeText] = React.useState("Email ID @domainname.com");
    const { t, i18n } = useTranslation();
    console.log(t('hello'));
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={logo}
                    resizeMode="contain"
                    style={styles.image}
                    width={311}
                    height={251}
                ></Image>
            </View>
            <View style={styles.wrapper}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: 311,
        height: 251,
    }
})
