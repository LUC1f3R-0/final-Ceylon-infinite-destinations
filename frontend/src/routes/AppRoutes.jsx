import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Home from '../view/Home';
import About from '../view/About';
import Layout from '../components/layout/Layout';
import NotFound from '../view/NotFound';
import Details from '../view/locationDetails/Details';

const AppRoutes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="details/:id" element={<Details />} />


                </Route >
                <Route path="*" element={<NotFound />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default AppRoutes;
