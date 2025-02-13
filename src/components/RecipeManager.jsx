import { useState, useEffect } from 'react';

import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

export default function RecipeManager() {

    /* Initialise recipes, retrieves any recipes that may have been previously saved.
    (saved recipes --> JS objects using JSON.parse)
    If there are saved recipies returned then useState is initialised with the recipe data. If not, then an empty array is initialised. */
    const [recipes, setRecipes] = useState(() => {
            const savedRecipes = localStorage.getItem('recipes');
            return savedRecipes ? JSON.parse(savedRecipes) : [];
    });

    const [currentRecipe, setCurrentRecipe] = useState({ title: '', content: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    /* When change occurs on target name & value are extrapolated from target of event. The current recipe properties and values are updated on the event. Spread operator allows all previous properties of the recipe to be carried over into the updated version*/
    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    };

    /* Stores recipes array (must be stringified because it's an array) in localStorage every time [recipes] experiences a change */
    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setRecipes(updatedRecipes);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setRecipes([...recipes, currentRecipe]);
        }
        setCurrentRecipe({ title: '', content: '' });
    }

    function handleDelete(index) {
        // The underscore (_) is used as a placeholder for 
        // the first parameter of the callback function. 
        // This is a common convention to indicate that the parameter is intentionally unused.
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <div>
            <h2>Save your recipes here</h2>
            <RecipeForm
                currentRecipe={currentRecipe}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
            />
            <h2>Your Recipes:</h2>
            <RecipeList
                recipes={recipes}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}

