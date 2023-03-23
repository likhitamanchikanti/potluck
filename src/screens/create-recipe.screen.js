import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import React, {useEffect, useState} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeaderComponent } from "../components/header.component";
import Select from "react-select";
// import { TouchableOpacity } from "react-native-web";
import {launchImageLibrary} from 'react-native-image-picker';
import {createRecipeScreenStyles as styles} from '../styles/create-recipe.screen.styles';

export const CreateRecipeScreen = ({ navigation }) => { 
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [diet, setDiet] = useState([]);
    const [dietOptions, setDietOptions] = useState([
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
    
    return (
        <ScrollView>
            <HeaderComponent/>
            <View style={styles.container}>
                <Text style={styles.title}>Create Recipe</Text>
                <View>
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
                        {/* <View>
                            <TouchableOpacity onPress={handleDietChange("Vegetarian")}>
                                <Text>Vegetarian</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDietChange("Vegan")}>
                                <Text>Vegan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDietChange("Gluten Free")}>
                                <Text>Gluten Free</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDietChange("Pescetarian")}>
                                <Text>Pescetarian</Text>
                            </TouchableOpacity>
                        </View> */}
                        <View style={styles.dietSelect}>
                            <Select 
                                options={dietOptions} 
                                isMulti
                                isSearchable
                                // onSelect={setDietOptions}
                                onSelect={handleDietChange}
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
                    <View style={styles.buttons}>
                        <Button onPress={() => {
                            console.log("title: " + JSON.stringify(recipeTitle));
                            console.log("description: " + JSON.stringify(recipeDescription));
                            console.log("prep: " + JSON.stringify(prepTime));
                            console.log("cook: " + JSON.stringify(cookTime));
                            console.log("diet: " + diet.map((dietItem) => JSON.stringify(dietItem)));
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
                            setSubmitted(true);
                            }} 
                            title="Submit"
                        />
                    </View>
                </View>
                {submitted ? (
                    <View style={{flexDirection: 'column'}}>
                        <Text>
                            Recipe Title: {data.recipeTitle}{'\n'}
                            Recipe Description: {data.recipeDescription}{'\n'}
                            Prep Time: {data.prepTime}{'\n'}
                            Cook Time: {data.cookTime}{'\n'}
                            Diet: {'\n'}
                        </Text>
                        {/* {diet.map((dietItem) => {
                            <Text>
                                {dietItem}{' '}
                            </Text>
                        })} */}
                        <Text>
                            Ingredients: {data.ingredients}{'\n'}
                            Steps: {data.steps}{'\n'}
                            Images: {data.images.length > 0 ? (<View>{data.images.at(0).width}</View>) : (<View></View>)}
                        </Text>
                    </View>
                ) : (
                    <View></View>
                )}
            </View>
        </ScrollView>
    );
};