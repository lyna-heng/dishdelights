import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

//Pages
import Home from './views/Home';
import Recipes from './views/Recipes';
import FavouriteRecipes from './views/FavouriteRecipes';
import About from './views/About';
import Contact from './views/Contact';

//Components

const router = createBrowserRouter([
  {
    path: "/dishdelights/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "favourites",
        element: <FavouriteRecipes />
      },
    ],
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
