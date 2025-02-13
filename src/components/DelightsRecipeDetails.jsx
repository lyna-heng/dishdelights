//executes when recipe is clicked
import { useParams } from "react-router-dom"


export default function DelightsRecipeDetails({ delightsrecipes }) {
    
    const { id } = useParams();

    //finding the recipe by id so that correct recipe is displayed
    const delightsrecipe = delightsrecipes.find(d => d.id === id)

    if (!delightsrecipe) {
        return <p> Sorry, we could not find the recipe you were looking for.</p>
    }
        
    return (
        <div className="recipe-detail-card">
            <h2>{delightsrecipe.name} </h2>
            <img
                src={delightsrecipe.image}
                alt={`${delightsrecipe.image}`}
                style={{ width: "400px", height: "400px", objectFit: "cover"}}
            />
            <p>{delightsrecipe.description}</p>
            <span>
                Meal: {delightsrecipe.meal}, Diet: {delightsrecipe.diet}
                <br/>
                Prep time: {delightsrecipe.preptime} <br /> Cook time: {delightsrecipe.cooktime}
                <h3>Ingredients</h3>
                <ul className="ingredients-list" >
                    {delightsrecipe.ingredients.map((ingredient, index) =>
                        <li key={index}>{ingredient}</li>)}
                </ul>
                <div className="instructions-container">
                    <h3>Instructions</h3>
                    <p>{delightsrecipe.instructions}</p>
                </div>
            </span>
        </div>
    );
}