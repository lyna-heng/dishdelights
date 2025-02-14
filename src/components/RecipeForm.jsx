export default function RecipeForm({ currentRecipe, handleChange, handleSubmit, isEditing }) {
    return (
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Recipe Title:
                    <input
                    type="text"
                    name="title"
                    value={currentRecipe.title}
                    onChange={handleChange}
                    required
                />
                </label>
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={currentRecipe.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea
                    name="ingredients"
                    value={currentRecipe.ingredients}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    name="content"
                    value={currentRecipe.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="custombutton" type="submit">{isEditing ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
}

