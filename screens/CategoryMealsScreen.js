import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
  const handlePress = () => {
    props.navigation.navigate('MealDetail');
  };

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button title="Go to Meal Detail!" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
