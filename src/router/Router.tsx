import React from 'react'
import Personalization from 'src/modules/personalization/components/personalization';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import News from '../modules/news/components/news';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Personalization />}></Route>
            <Route path='/news' element={<News />}></Route>
        </Route>
    )
)

export default Router;