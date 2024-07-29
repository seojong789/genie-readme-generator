import './App.css';
// import HomePage from './pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root/RootLayout';
import Main from './pages/main/Main';
import SignInPage from './pages/sign/SignIn';
import SignUpPage from './pages/sign/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: 'root',
    // loader: tokenLoader,
    children: [
      // {
      //   index: true,
      //   element: <HomePage />,
      // },
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      // {
      //   path: '/login',
      //   element: <LoginPage />,
      //   action: loginAction,
      // },
      // { path: '/logout', action: logoutAction },
      // {
      //   path: '/boards',
      //   element: <BoardLayout />,
      //   loader: checkAuthLoader,
      //   children: [
      //     {
      //       index: true,
      //       element: <BoardPage />,
      //     },
      //     {
      //       path: ':boardId',
      //       element: <BoardDetail />,
      //     },
      //   ],
      // },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <QueryClientProvider client={queryClient}>
    // <RouterProvider router={router} />
    // </QueryClientProvider>
  );
}

export default App;
