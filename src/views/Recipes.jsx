import { Link } from "react-router-dom";
import DelightsRecipeFilter from "../components/DelightsRecipeFilter";


export default function Recipes({ delightsrecipes }) {
    return (
        <>
            <h2>DishDelights Recipes</h2>

            <DelightsRecipeFilter items={delightsrecipes} />

            
            <h3>Not sure what to eat?</h3>
            <p> No worries! Dish Delights has a wide range of recipes ready for you: </p>
            <ul>
                {delightsrecipes.map((delightsrecipe) => (
                    <li key={delightsrecipe.id} >
                        <div className="recipe-card">
                            <div>
                                <h2>{delightsrecipe.name}</h2>
                                <img
                                src={delightsrecipe.image}
                                alt={`${delightsrecipe.image}`}
                                style={{ width: "200px", height: "200px", objectFit: "cover"}}
                                />
                                <p>{delightsrecipe.description}</p>
                            </div>
                            <button>
                                <Link to={`/dishdelights/recipes/${delightsrecipe.id}`}>Go to recipe </Link>
                            </button>

                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

