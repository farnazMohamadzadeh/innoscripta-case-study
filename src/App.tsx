import React from 'react';
import router from './router'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'src/styles/css/_general-css-style.css'
import 'src/styles/scss/_general-scss-style.scss'
import { RouterProvider } from 'react-router-dom'
import Layout from './modules/layout/components/layout';

function App() {
  return (
    <Layout>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </Layout>
  );
}

export default App;
