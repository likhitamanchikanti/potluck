import {StyleSheet} from 'react-native';

export const TestingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 1000,
    backgroundColor: '#FFFFFF',
    // paddingHorizontal: 20,
    paddingVertical: 100,
    flexWrap: "wrap"
    // padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    fontFamily: 'Cambria Math', 
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Cambria Math',
  },
  description: {
    fontSize: 16,
    marginTop: 20, 
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Cambria Math', 
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 18,
    fontFamily: 'Cambria Math', 
  },
  ingredientsContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10,
    marginTop: 20,
    flexShrink: 1,
    flexDirection:'row'
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Cambria Math', 
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    flexShrink:1,
    flexWrap: 'wrap',
    maxWidth: '80%',
    fontFamily: 'Cambria Math', 
  },
});



