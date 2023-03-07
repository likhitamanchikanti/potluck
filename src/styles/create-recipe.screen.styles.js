import {StyleSheet} from 'react-native';

export const createRecipeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: 200,
        height: 200,
        margin: 5,
    },
});