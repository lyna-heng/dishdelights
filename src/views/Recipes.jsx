export default function Recipes({ delightsrecipes }) {
    return (
        <>
            <h2>DishDelights Recipes</h2>
            <p>Not sure what to eat? No worries! Dish Delights has a wide range of recipes ready for you: </p>

            <ul>
                {delightsrecipes.map((delightsrecipe) => (
                    <li key={delightsrecipe.id} >
                        <div className="delightsrecipe-card">
                            {delightsrecipe.name}
                            {delightsrecipe.description}
                            {delightsrecipe.meal}
                            {delightsrecipe.diet}
                            {delightsrecipe.preptime}
                            {delightsrecipe.cooktime}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}