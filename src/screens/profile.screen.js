import { Button, Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import {profileScreenStyles as styles} from '../styles/profile.screen.styles';

const Link = props => {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go home" />
    </View>
  );
};