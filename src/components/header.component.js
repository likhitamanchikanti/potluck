import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React from "react";
import {color} from '../config/global.styles.config';
import { useNavigation } from '@react-navigation/native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.75rem",
        textAlign: "center"
    },
    logo: {
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
    pfp: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    tabLink: {
        textAlign: "center",
        fontWeight: "bold",
        color: color.white,
    }
});

export const HeaderComponent = () => {
    const logo = require('../assets/logo.png');
    const pfp = require('../assets/mock-profile-picture.jpg');
    const createIcon = require('../assets/create-icon.png')
    const navigation = useNavigation();

    return (
        <View>
        <View style={styles.header}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', }}>
                            {/* <Icon name="circle" size={50} color='transparent'/> */}
                        </View>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column',}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={logo} style={styles.logo}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.title}>
                        Potluck
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateRecipe')}>
                        <View style={{justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={createIcon} style={styles.pfp}/>
                            {/* <Icon name="circle" size={50} color={color.blue}/> */}
                            <View style={{position: 'absolute',}}>
                                {/* <Icon name="plus" size={30} color={color.white} /> */}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={pfp} style={styles.pfp}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            <View style={{height: 50, width: window.width, backgroundColor: color.blue,}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Newly Added</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Most Loved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Quick and Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Low Calorie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Testing')}>
                        <Text style={styles.tabLink}>Testing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Budget Friendly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Seasonal Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>Vegan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabLink}>High Protein</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
