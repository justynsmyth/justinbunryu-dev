import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

{
  /* All Route and Components */
  /* When ready to deploy after updating:
  git push
  npm run build
  npm run deploy
  */
}
import Header from './components/Header';
import Home from './routes/Home';
import Experience from './routes/Experience';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: 'experience', element: <Experience /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
