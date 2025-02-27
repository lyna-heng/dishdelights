import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                <ul style={{ display: "flex", gap: "40px" }}>
                    <li>
                        <Link to={""}>Home</Link>
                    </li>
                    <li>
                        <Link to={"about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"recipes"}>DishDelights Recipes</Link>
                    </li>
                    <li>
                        <Link to={"favourites"}>Your Favourite Recipes</Link>
                    </li>
                    <li>
                        <Link to={"contact"}>Contact</Link>
                    </li>
                </ul>
                </nav>
            </header>
        </>
    )
}