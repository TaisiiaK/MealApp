import { useLayoutEffect } from 'react';

import MealList from '../components/MealList/MealList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealOverviewScreen({ route, navigation }) {
  const categoId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoId, navigation]);

  return <MealList items={displayedMeals}/>
}
export default MealOverviewScreen;


