export default function RecipeList({ recipes, handleEdit, handleDelete }) {
    return (
        <ul>
            {recipes.map((recipe, index) => (
                <li key={index}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.content}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
