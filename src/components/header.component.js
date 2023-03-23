// TODO: potluck logo that takes you home, tab that takes you to create recipe page, profile pic that takes you to profile

import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from '@react-navigation/native';

export const styles = StyleSheet.create({
    header: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.75rem",
        textAlign: "center"
    },
    logo: {
        width: 60,
        height: 60,
    },
});

export const HeaderComponent = () => {
    const logo = require('../assets/logo.png');
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={logo} style={styles.logo}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.title}>
                    Potluck
                </Text>
            </TouchableOpacity>
        </View>
    );
};