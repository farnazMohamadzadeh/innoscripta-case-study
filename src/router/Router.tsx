import React from 'react'
import Personalization from 'src/modules/personalization/components/personalization';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Personalization />}></Route>
            <Route path='/news' element={<></>}></Route>
        </Route>
    )
)

export default Router;