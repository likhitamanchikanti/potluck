import {StyleSheet} from 'react-native';

export const createRecipeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "auto",
    },
    content: {
        // width: '60%',
        // flexDirection: 'column',
        // alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginVertical: "1.5em",
        textAlign: "center"
    },
    imageStyle: {
        // width: '30%',
        // height: '100%',
        margin: 3,
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputMultiline: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dietSelectContainer: {
        padding: 10,
        // alignItems: 'center',
    },
    dietSelect: {
        fontFamily: 'Arial',
        fontSize: 14,
        paddingTop: 10,
        width: '50%',
    },
});