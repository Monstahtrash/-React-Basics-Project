import { useState, useEffect } from 'react';
import { RecipeListPage} from '../../pages/RecipeListPage';
import { TextInput } from './TextInput';
import { data } from '../../utils/data';

export const RecipeSearch = ({setSelected}) => {
    const [searchField, setSearchField] = useState('');
    const [matchedArray, setMatchedArray] = useState([]);

    useEffect(()=>{
        handleFilter();
    }, [searchField])
    // const matchedRecipe = data.filter((recipes) => {
    //     console.log(recipes);
    //     if(recipes.healthLabels){
    //         return recipes.healthLabels.toLowerCase().includes(searchField.toLowerCase());
    //     }
       
    // });

    const handleFilter = () =>{
        var matchedArray = [];
        console.log(searchField);
        if(searchField != ""){
            data.hits.map((hit) => {
                var isMatched = false;
                // console.log(hit.recipe.label.includes(searchField.toLowerCase()));
                (hit.recipe.label.toLowerCase().includes(searchField.toLowerCase()))?isMatched=true:false;
                
                hit.recipe.healthLabels.filter((healthLabel) => {
                    (healthLabel.toLowerCase().includes(searchField.toLowerCase()))?isMatched=true:false;
                
                });
                (isMatched)?matchedArray.push(hit):false;
            });
            setSelected(matchedArray);
        }
        else{
            setSelected(data.hits);
        }
        
    }
    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    return (
        <div>
        <label>Search for recipes:</label>
        <TextInput changeFn={handleChange} />
        </div>
    );
};