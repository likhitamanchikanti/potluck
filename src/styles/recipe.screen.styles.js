import {StyleSheet} from 'react-native';

export const RecipeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 1000,
    backgroundColor: '#FFFFFF',
    paddingVertical: 100,
    flexWrap: "wrap"
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
    flex: 1, 
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
    flexWrap: 'wrap',
    maxWidth: '80%',
    fontFamily: 'Cambria Math',     
  },
});



