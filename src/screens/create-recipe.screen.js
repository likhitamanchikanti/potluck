import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import React, {useEffect, useState} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeaderComponent } from "../components/header.component";
import Select from "react-select";
import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';
// import { TouchableOpacity } from "react-native-web";
import {launchImageLibrary} from 'react-native-image-picker';
import {createRecipeScreenStyles as styles} from '../styles/create-recipe.screen.styles';

export const CreateRecipeScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [diet, setDiet] = useState('');
    const [dietOptions, setDietOptions] = useState([
        { key: 1, value: 'Vegetarian' },
        { key: 2, value: 'Vegan' },
        { key: 3, value: 'Gluten Free' },
        { key: 4, value: 'Pescetarian' }
    ]);    
    const [ingredients, setIngredient] = useState('');
    const [steps, setStep] = useState('');
    const [images, setImages] = useState([]);
    const [imageLink, setImageLink] = useState('');

    
    const [data, setData] = useState({ 
        userID: '',
        recipeTitle: '', 
        recipeDescription: '', 
        prepTime: '',
        cookTime: '',
        diet: [],
        ingredients: '',
        steps: '',
        images: [],
        imageLink: ''
    });

    const handleDetailsChange = (field, value) => {
        const details = {...data};
        details[field] = value;
        setData(details);
    };
    
    const [json, setJSON] = useState('');
    const [retrievedJson, setRetrievedJson] = useState('');

    const [filePath, setFilePath] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const chooseFile = async () => {
        const options = {
            mediaType: 'photo',
        };
        
        if (images.length < 10) {
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
                
                const img = response.assets[0];
                
                console.log('uri -> ', img.uri);
                console.log('width -> ', img.width);
                console.log('height -> ', img.height);

                setFilePath(img);
            });
        }
    };

    const onSubmit = async () => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem(recipeTitle, jsonValue)
        } catch (e2) {
            console.log("Error storing recipe data in async storage: " + e2.message);
        }
    };

    const removeFile = (uri) => {
        // loop thru images and remove the image that matches the file path given
        setImages(images.filter(img => img.uri !== uri));
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(recipeTitle);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log("Error getting recipe data: " + e.message);
        }
    };

    useEffect(() => {
        if (filePath != '' && filePath != images.at(images.length-1)) {
            let imageArr = [...images];
            imageArr.push(filePath);
            setImages(imageArr);
        }
    });

    // const handleImagesChange = () => {
    //     if (filePath != '' && filePath != images.at(images.length-1)) {
    //         let imageArr = [...images];
    //         imageArr.push(filePath);
    //         setImages(imageArr);
    //     }
    // };

    const handleDietChange = (selectedOption) => {
        let d = [...diet];
        diet.push(selectedOption);
        setDiet(d);
        console.log('Option selected: ', selectedOption);
    };

    addRecipe = () => {
        const recipe = {
            userID,
            recipeTitle,
            recipeDescription,
            prepTime,
            cookTime,
            diet,
            ingredients,
            steps,
            images,
            imageLink
        }

        axios.post('http://localhost:8080/', recipe)
        .then(function (response) { console.log(response); })
        .catch(function (error) { console.log(error); });
    }
    
    return (
        <ScrollView>
            <HeaderComponent/>
            <View style={styles.container}>
                <Text style={styles.title}>Create Recipe</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="User ID"
                        value={userID}
                        onChangeText={setUserID}
                        maxLength={80}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder="Recipe Title"
                        value={recipeTitle}
                        onChangeText={setRecipeTitle}
                        maxLength={80}
                    />
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Recipe Description"
                        value={recipeDescription}
                        onChangeText={setRecipeDescription}
                    />
                    <View style={styles.buttons}>
                        <TextInput
                            style={styles.input}
                            placeholder="Prep Time"
                            value={prepTime}
                            onChangeText={setPrepTime}
                            maxLength={80}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cook Time"
                            value={cookTime}
                            onChangeText={setCookTime}
                            maxLength={80}
                        />
                    </View>
                    <View style={styles.dietSelectContainer}>
                        <Text>
                            Diet
                        </Text>
                        <View style={styles.dietSelect}>
                            <SelectList 
                                setSelected={(val) => setDiet(val)} 
                                data={dietOptions} 
                                save="value"
                            />
                        </View>
                    </View>
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Ingredients"
                        value={ingredients}
                        onChangeText={setIngredient}
                    />
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Steps"
                        value={steps}
                        onChangeText={setStep}
                    />

                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Image Link"
                        value={imageLink}
                        onChangeText={setImageLink}
                        />
                </View>
                <View style={[styles.buttons, {paddingBottom: 30}]}>
                    <View style={styles.buttons}>
                        <Button title="Submit" onPress={() => {
                            addRecipe();

                            console.log("user id: " + JSON.stringify(userID));
                            console.log("title: " + JSON.stringify(recipeTitle));
                            console.log("description: " + JSON.stringify(recipeDescription));
                            console.log("prep: " + JSON.stringify(prepTime));
                            console.log("cook: " + JSON.stringify(cookTime));
                            console.log("diet: " + JSON.stringify(diet));
                            console.log("ingredients: " + JSON.stringify(ingredients));
                            console.log("steps: " + JSON.stringify(steps));
                            console.log("images: " + JSON.stringify(images));
                            console.log("image link: " + JSON.stringify(imageLink));
                        }}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};