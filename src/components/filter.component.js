import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import { color } from '../config/global.styles.config';

export const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    borderColor: color.blue,
    padding: 10,
    borderRadius: 25,
  },
});

export const FilterComponent = ({minCook, setMinCook, maxCook, setMaxCook}) => {
    return (
        <View>
            <View style={{flexDirection: 'column', width: 300,}}>
            <Text style={[styles.title, {textAlign: 'left', marginVertical: 0, paddingBottom: 20}]}>Filters</Text>
            <View style={{padding: 20, borderWidth: 1, borderRadius: 25, height: 120, borderColor: color.blue}}>
                <Text style={{fontWeight: 'bold'}}>Total Time:</Text>
                <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.input}
                    placeholder="Min."
                    value={minCook}
                    onChangeText={setMinCook}
                    maxLength={4}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Max."
                    value={maxCook}
                    onChangeText={setMaxCook}
                    maxLength={4}
                />
                </View>
            </View>
            </View>
        </View>
    );
}