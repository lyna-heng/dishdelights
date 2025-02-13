export default function RecipeList({ recipes, handleEdit, handleDelete }) {
    return (
        <ul>
            {recipes.map((recipe, index) => (
                <li key={index}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{recipe.content}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
