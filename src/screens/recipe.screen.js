import { Image, StyleSheet, Text, View } from 'react-native';

import { HeaderComponent } from '../components/header.component';
import { ScrollView } from 'react-native-web';
import { RecipeScreenStyles as styles } from '../styles/recipe.screen.styles';

export const RecipeScreen = ({ route, navigation }) => {
  const { currRecipe } = route.params;
  return (
    <ScrollView>
      <HeaderComponent/>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            // source={require('../assets/Spaghetti.jpg')}
            source={{uri: currRecipe.Image}}
            style={{ ...styles.image, width: 400, height: 400, alignSelf: 'left', marginTop: 10 }}
          />
          <View style={{flexShrink:1, marginLeft: 10}}>
            <Text style={styles.title}>{currRecipe.RecipeTitle}</Text>
            <Text style={styles.description}>
              {currRecipe.RecipeDescription}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'center'}}>
              <View style={[styles.info]}>
              <Text style={styles.infoItem}><Text style={{fontWeight: 'bold'}}>Prep Time:</Text> {currRecipe.PrepTime}{'     '}</Text>
              </View>
              <View style={styles.info}>
              <Text style={styles.infoItem}><Text style={{fontWeight: 'bold'}}>Cook Time:</Text> {currRecipe.CookTime}</Text>
              </View>
            </View>
          </View>
        </View>
      <View style={styles.ingredientsContainer}>
      <View style={{flex: 0.40}}>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        <Text style={styles.listItem}>{currRecipe.Ingredients}</Text>
      </View>
      <View style={{flex: 0.60}}>
        <Text style={styles.sectionTitle}>Steps:</Text>
        <View style={{flexShrink: 1}}>
          <Text style={styles.listItem}>{currRecipe.Steps}</Text>
        </View>
      </View>
    </View>
    </View>
    </ScrollView>
  );
};


