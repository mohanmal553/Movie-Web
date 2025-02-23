import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/HomePage/Home.jsx";
import { Movie } from "./Components/MoviePage/Movie.jsx";
import { Contact } from "./Components/ContactPage/Contact.jsx";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage.jsx";
import { AppLayout } from "./AppLayout.jsx";
import { getMoviesData } from "./Components/API/API.jsx";
import { MovieDetails } from "./UI/MovieDetails.jsx";
import { getMoviesDetails } from "./Components/API/MovieDetails.jsx";
import {contactData} from "./Components/ContactPage/Contact.jsx";

export function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Home",
          element: <Home />
        },
        {
          path: "/Movie",
          element: <Movie />,
          loader: getMoviesData // load the API data all card return by the function
        },
        {
          path:"/Movie/:id",    // If user type anything after '/Movie/' we take as a id
          element:<MovieDetails/>,  //then render component
          loader:getMoviesDetails // load the API data specific card return by the function
        },
        {
          path: "/Contact",
          element: <Contact />,
          action:contactData
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}