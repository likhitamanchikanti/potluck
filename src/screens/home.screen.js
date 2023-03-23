import { Button, Image, StyleSheet, Text, View } from "react-native";

import { HeaderComponent } from "../components/header.component";
import React from "react";
import { ScrollView } from "react-native-web";
import {homeScreenStyles as styles} from '../styles/home.screen.styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <HeaderComponent/>
      <View style={styles.app}>
        <Button onPress={() => navigation.navigate('Profile')} title="Go to profile" />
      </View>
    </ScrollView>
  );
};