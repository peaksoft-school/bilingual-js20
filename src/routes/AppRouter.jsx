import { createBrowserRouter, RouterProvider } from "react-router";
import { PrivateAuthRouter } from "./PrivateAuthRouter";

 const router = createBrowserRouter([
   {
     path: '/',
     element: <PrivateAuthRouter
      roles={['USER', 'GUEST']}
      Component={<h1>Login Page</h1>}
      fallbackPath={'/admin'}/>,
   },
   {
     path: '/user',
     element: <PrivateAuthRouter
      roles={['USER']}
      Component={<h1>User</h1>}
      fallbackPath={'/'}/>,
   },
   {
     path: '/admin',
     element: <PrivateAuthRouter
      roles={['ADMIN']}
      Component={<h1>Admin</h1>}
      fallbackPath={'/'}/>,
   },
   {
     path: '*',
     element: <h1>404 Not Found</h1>,
   },
   {
     path: '/sing-in',
     element: <h1>Sing-in</h1>,
   },
   {
     path: '/sing-up',
     element: <h1>Sing-up</h1>,
   },
 ])

 export const AppRouter = () => <RouterProvider router={router}/>