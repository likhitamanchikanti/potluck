import { Button, Image, Text, View } from "react-native";
import React, {useState} from "react";

import {launchImageLibrary} from 'react-native-image-picker';
import {createRecipeScreenStyles as styles} from '../styles/create-recipe.screen.styles';

export const CreateRecipeScreen = ({ navigation }) => {
    const [filePath, setFilePath] = useState({
        uri: "",
        width: "",
        height: "",
    });
    
    const chooseFile = async () => {
        const options = {
            mediaType: 'photo',
        };
        
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('uri -> ', response.assets[0].uri);
            console.log('width -> ', response.assets[0].width);
            console.log('height -> ', response.assets[0].height);
            setFilePath(response.assets[0]);
        });
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Recipe</Text>
            <View>
                <Image
                    source={{uri: filePath.uri}}
                    style={styles.imageStyle}
                />
                <View style={styles.buttons}>
                    <Button onPress={chooseFile} title="Upload photo" />
                </View>
            </View>
            <View style={styles.buttons}>
                <Button onPress={() => navigation.navigate('Home')} title="Go home" />
                <Button onPress={() => navigation.navigate('Profile')} title="Go to profile" />
            </View>
        </View>
    );
};