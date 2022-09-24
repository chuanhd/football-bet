import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import FixturesListPage from './pages';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<FixturesListPage />} />));

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
