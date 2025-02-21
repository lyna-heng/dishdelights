import { useState } from "react";
import { Link } from "react-router-dom";


export default function DelightsRecipeFilter({ items }) {
    
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredItems = items.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.diet === selectedCategory;
        return matchesCategory;
    });

    return (
        <>
            <div className="filter-box">
                <label htmlFor="category"> <h3>Filter by Dietary Need: </h3> </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all" >All Categories</option>
                    <option value="Vegetarian" >Vegetarian</option>
                    <option value="Vegan" >Vegan</option>
                    <option value="Keto" >Keto</option>
                    <option value="None" >None</option>
                </select>
            </div>
            <div id="item-list">
                {filteredItems.map(item => (

                    <div key={item.id} className="item">
                        {item.name}
                        <button className="custombutton" >
                            <Link to={`/dishdelights/recipes/${item.id}`}>Go to recipe</Link>
                        </button>
                    </div>
                    
                ))}
            </div>
        </>
    )
}