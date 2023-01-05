import { View, Text, StyleSheet } from 'react-native';

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is Meal Deatail Screen {mealId}</Text>
    </View>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({});
