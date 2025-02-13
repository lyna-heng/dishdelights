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
            <p>{delightsrecipe.description}</p>
            <span>
                {delightsrecipe.meal}, {delightsrecipe.diet}
                <br/>
                Prep time: {delightsrecipe.preptime} <br/> Cook time: {delightsrecipe.cooktime}
            </span>
        </div>
    );
}