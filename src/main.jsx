import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
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
import { ProjectFilterContextProvider } from './context/ProjectFilterContext';

/*
ProjectFilterContext needs to be in Header since the Home button needs to be able to reset the state
*/
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProjectFilterContextProvider>
        <Header />
      </ProjectFilterContextProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'experience', element: <Experience /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
