import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import { TestingScreenStyles as styles } from '../styles/testing.screen.styles';

export const TestingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/Spaghetti.jpg')}
            style={{ ...styles.image, width: 400, height: 400, alignSelf: 'left', marginTop: 10 }}
          />
          <View style={{flexShrink:1, marginLeft: 10}}>
            <Text style={styles.title}>Spaghetti Recipe</Text>
            <Text style={styles.description}>
              It seems like everyone I have ever met has “a spaghetti recipe” they know and love, 
              and each one is different! Some have store-bought sauce, some homemade. Some have meat, some have veggies, and others don’t.
              It just surprises me that they are all different, but I love that everyone has their own twist on this classic dinner recipe.
              We too have a favorite Spaghetti recipe we’ve made for years and love. That’s probably why we make this Spaghetti for dinner so often (we also have a great Baked Spaghetti and Chicken Spaghetti)!
              It’s simple, easy to make, always tastes delicious, and everyone likes it. And honestly, leftovers taste exactly the same heated up as if it was just made (my kind of leftover)!!
              Whenever I make this Easy Spaghetti Recipe, I usually serve it with some Cheesy Garlic Bread and a side of Fried Zucchini, for one delicious meal!
            </Text>
            <View style={[styles.info, { marginTop: 5 }]}>
            <Text style={styles.infoItem}><Text style={{fontWeight: 'bold'}}>Prep Time:</Text> 5 minutes</Text>
            </View>
            <View style={styles.info}>
            <Text style={styles.infoItem}><Text style={{fontWeight: 'bold'}}>Cook Time:</Text> 1 hour and 15 minutes</Text>
            </View>
          </View>
        </View>
      <View style={styles.ingredientsContainer}>
      <View>  
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        <Text style={styles.listItem}>- 1 lb hamburger</Text>
        <Text style={styles.listItem}>- 2 cubes beef bouillion</Text>
        <Text style={styles.listItem}>- 8 oz of tomato sauce</Text>
        <Text style={styles.listItem}>- 6 oz of tomato paste</Text>
        <Text style={styles.listItem}>- 2 cups hot water</Text>
        <Text style={styles.listItem}>- 2 teaspoons of sugar</Text>
        <Text style={styles.listItem}>- 1/2 teaspoon dried basil</Text>
        <Text style={styles.listItem}>- 1/2 teaspoon dried oregano</Text>
        <Text style={styles.listItem}>- 16 oz of spaghetti noodles</Text>
        <Text style={styles.listItem}>- Pepper, Salt, and Garlic to taste!</Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Steps:</Text>
        <View style={{ width: '90%', flexShrink: 1 }}>
        <Text style={styles.listItem}>1. Brown your hamburger in a large pan.</Text>
        <Text style={styles.listItem}>2. Once cooked, throw in salt, pepper, tomato sauce and paste, water (with the bouillon cubes in it), sugar, basil, oregano and garlic. Simmer on low for an hour.</Text>
        <Text style={styles.listItem}>3. A few minutes before the hour is done, cook box of spaghetti noodles as directed on package.</Text>
        <Text style={styles.listItem}>4. Once the noodles are cooked, drain and add to spaghetti sauce. ENJOY!</Text>
      </View>
      </View>
    </View>
    </View>
    </ScrollView>
  );
};


