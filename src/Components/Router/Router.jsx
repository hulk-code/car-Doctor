import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Error from "../Pages/ErrorPage/Error";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckedOut from "../CheckOut/CheckedOut";
import Booking from "../Booking/Booking";
import PrivetRoute from "../PriverRoute/PrivetRoute";



    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <Error></Error>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/services",
              element: <Services></Services>,
            },
            {
              path: "/blog",
              element: <Blog></Blog>,
            },
            {
              path: "/contact",
              element: <Contact></Contact>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/register",
              element: <Register></Register>,
            },
            {
              path: "/checkout/:id",
              element: <PrivetRoute><CheckedOut></CheckedOut></PrivetRoute>,
              loader :({params}) =>fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
              path: "/booking",
              element:<PrivetRoute> <Booking></Booking></PrivetRoute>,
            },
          ],
        },
      ]);
    

export default Router;