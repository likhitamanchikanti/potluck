import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import React, {useEffect, useState} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Select from "react-select";
import {launchImageLibrary} from 'react-native-image-picker';
import {createRecipeScreenStyles as styles} from '../styles/create-recipe.screen.styles';

export const CreateRecipeScreen = ({ navigation }) => { 
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [diet, setDiet] = useState([
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'glutenFree', label: 'Gluten Free' },
        { value: 'pescetarian', label: 'Pescetarian' }
    ]);    
    const [ingredients, setIngredient] = useState('');
    const [steps, setStep] = useState('');
    const [images, setImages] = useState([]);
    
    const [data, setData] = useState({ 
        recipeTitle: '', 
        recipeDescription: '', 
        prepTime: '',
        cookTime: '',
        diet: [],
        ingredients: '',
        steps: '',
        images: []
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
        // try {
        //     await AsyncStorage.multiSet([['recipe title', recipeTitle]]);
        //     // await AsyncStorage.setItem(recipeTitle, data);
        // } catch (e) {
        //     console.log(e);
        // }
        // try {
        //     setData({
        //         ...data,
        //         recipeTitle: recipeTitle,
        //         recipeDescription: recipeDescription,
        //         prepTime: prepTime,
        //         cookTime: cookTime,
        //         diet: diet,
        //         ingredients: ingredients,
        //         steps: steps,
        //         images: images
        //     });
        //     console.log("data: " + JSON.stringify(data));
        // }
        // catch (e1) {
        //     console.log("Error setting recipe data object: " + e1.message);
        // }
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

    // storeData = async (data) => {
    //     try {
    //         const jsonValue = JSON.stringify(data)
    //         await AsyncStorage.setItem(recipeTitle, jsonValue)
    //     } catch (e) {
    //         console.log("Error storing recipe data: " + e.message);
    //     }
    // };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(recipeTitle);
            // if (jsonValue != null) {
            //     setData(jsonValue);
            // }
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
            // handleDetailsChange('images', images);
        }
    });
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Recipe</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Recipe Title"
                        value={recipeTitle}
                        // onChangeText={() => {
                        //     setRecipeTitle
                        //     setData(data => ({
                        //         ...data,
                        //         recipeTitle: recipeTitle
                        //     }))
                        // }}
                        onChangeText={setRecipeTitle}
                        // onChangeText={(text) => handleDetailsChange('recipeTitle', text)}
                        maxLength={80}
                    />
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Recipe Description"
                        value={recipeDescription}
                        onChangeText={setRecipeDescription}
                        // onChangeText={(text) => handleDetailsChange('recipeDescription', text)}
                    />
                    <View style={styles.buttons}>
                        <TextInput
                            style={styles.input}
                            placeholder="Prep Time"
                            value={prepTime}
                            onChangeText={setPrepTime}
                            // onChangeText={(text) => handleDetailsChange('prepTime', text)}
                            maxLength={80}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cook Time"
                            value={cookTime}
                            onChangeText={setCookTime}
                            // onChangeText={(text) => handleDetailsChange('cookTime', text)}
                            maxLength={80}
                        />
                    </View>
                    <View style={styles.dietSelectContainer}>
                        <Text>
                            Diet
                        </Text>
                        <View style={styles.dietSelect}>
                            <Select 
                                options={diet} 
                                isMulti
                                isSearchable
                                onSelect={setDiet}
                            />
                        </View>
                    </View>
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Ingredients"
                        value={ingredients}
                        onChangeText={setIngredient}
                        // onChangeText={(text) => handleDetailsChange('ingredients', text)}
                    />
                    <TextInput
                        multiline
                        style={styles.inputMultiline}
                        placeholder="Steps"
                        value={steps}
                        onChangeText={setStep}
                        // onChangeText={(text) => handleDetailsChange('steps', text)}
                    />
                </View>
                {images.length > 0 ? ( 
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}> 
                        {images.map((img) => (
                            <View>
                                {/* TODO: images are not displaying after uploading */}
                                <Image 
                                    source={{uri: img.uri}}
                                    style={styles.imageStyle}
                                    // width={img.width}
                                    // height={img.height}
                                />
                                {/* <Button onPress={removeFile(img.uri)} title="Remove photo"/> //idk how to do this urgh */}
                            </View>
                        ))}
                    </View>
                    ) : (
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}> 
                    </View>
                )} 
                <View style={styles.buttons}>
                    <View style={styles.buttons}>
                        <Button onPress={chooseFile} title="Upload photo" />
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons}>
                        <Button onPress={() => {
                            console.log("title: " + JSON.stringify(recipeTitle));
                            console.log("description: " + JSON.stringify(recipeDescription));
                            console.log("prep: " + JSON.stringify(prepTime));
                            console.log("cook: " + JSON.stringify(cookTime));
                            console.log("diet: " + JSON.stringify(diet));
                            console.log("ingredients: " + JSON.stringify(ingredients));
                            console.log("steps: " + JSON.stringify(steps));
                            console.log("images: " + JSON.stringify(images));

                            setData({
                                ...data,
                                recipeTitle: recipeTitle,
                                recipeDescription: recipeDescription,
                                prepTime: prepTime,
                                cookTime: cookTime,
                                diet: diet,
                                ingredients: ingredients,
                                steps: steps,
                                images: images
                            });
                            console.log("data: " + JSON.stringify(data));
                            
                            onSubmit
                            }} 
                            title="Submit"
                        />
                    </View>
                    <Button onPress={() => navigation.navigate('Home')} title="Go home" />
                    <Button onPress={() => navigation.navigate('Profile')} title="Go to profile" />
                </View>
                <View style={styles.dietSelectContainer}>
                    <Text>heyyyyy lol</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text>
                        {data.recipeTitle}
                        {data.recipeDescription}
                        {data.prepTime}
                        {data.cookTime}
                        {/* {data.diet} */}
                        {data.ingredients}
                        {data.steps}
                        {/* {data.images} */}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};