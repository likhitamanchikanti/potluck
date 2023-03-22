import {StyleSheet} from 'react-native';

export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: true,
    marginVertical: "2em",
    marginHorizontal: "auto",
    // maxWidth: 500
  },
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flexWrap: true,
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    marginHorizontal: '3em',
    textAlign: "center",
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
  },
  buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
});