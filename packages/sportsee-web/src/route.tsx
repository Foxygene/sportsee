import { createHashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/user/:id',
    element: <ProfilePage />,
  },
]);
