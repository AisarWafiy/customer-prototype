import { Redirect } from "react-router"


const entryRoute = [
    {
      props: { exact: true, path: '/login' },
      component: <Redirect to="/login" />,
    },
  ]
  
  const errorRoute = [
    {
      // props: { exact: true, path: '/' },
      component: <Redirect to="/authentication/404" />,
    },
  ]
  
  const routes = [
    ...entryRoute,
    ...errorRoute,
  ]
  
  export default routes