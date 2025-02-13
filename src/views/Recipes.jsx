import { Link } from "react-router-dom";
import DelightsRecipeFilter from "../components/DelightsRecipeFilter";


export default function Recipes({ delightsrecipes }) {
    return (
        <>
            <h2>DishDelights Recipes</h2>

            <h2>Know what youre looking for?</h2>
            <DelightsRecipeFilter items={delightsrecipes} />

            
            <h3>Not sure what to eat?</h3>
            <p> No worries! Dish Delights has a wide range of recipes ready for you: </p>
            <ul>
                {delightsrecipes.map((delightsrecipe) => (
                    <li key={delightsrecipe.id} >
                        <div className="recipe-card">
                            <h2>{delightsrecipe.name}</h2>
                            <image></image>
                            <p>{delightsrecipe.description}</p>
                        </div>
                        <Link to={`/dishdelights/recipes/${delightsrecipe.id}`}>Go to recipe... </Link>
                        <br />
                    </li>
                ))}
            </ul>
        </>
    );
}

