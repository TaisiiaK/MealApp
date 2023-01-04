import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  const categoId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoId}</Text>
    </View>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
