import {StyleSheet} from 'react-native';
import { color } from '../config/global.styles.config';

export const homeScreenStyles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
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
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  tileContainer: {
    flexDirection: 'row',
    paddingBottom: 50,
    paddingLeft: 50,
  },
  tile: {
    backgroundColor: color.lightGreen,
    height: 200,
    width: 850,
    padding: 50,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: color.blue,
    padding: 10,
  },
});