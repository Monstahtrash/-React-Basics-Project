import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState, useEffect} from 'react';
import { data } from './utils/data';
export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(false);
  useEffect(()=>{
    console.log(selectedRecipe);
  }, [selectedRecipe])
  // Your state code here
  console.log(data);
  return (
    <div>
    {(selectedRecipe) ? <RecipePage data={selectedRecipe} setSelectedRecipe={setSelectedRecipe}/>
    :<RecipeListPage data={data.hits} setSelectedRecipe={setSelectedRecipe} />
  }</div>
  );
};
