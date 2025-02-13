
export default function RecipeForm({ currentRecipe, handleChange, handleSubmit, isEditing }) {
    return (
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Recipe Title:</label>
                <input
                    type="text"
                    name="title"
                    value={currentRecipe.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Instructions</label>
                <textarea
                    name="content"
                    value={currentRecipe.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{isEditing ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
}


