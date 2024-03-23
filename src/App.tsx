import React from 'react';
import router from './router'
import 'src/styles/css/_general-css-style.css'
import 'src/styles/scss/_general-scss-style.scss'
import { RouterProvider } from 'react-router-dom'
import Layout from './modules/layout/components/layout';

function App() {
  return (
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
