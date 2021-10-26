import { Redirect } from "react-router";
import Dashboard from "../dashboard/Dashboard";

const entryRoute = [
  {
    props: { exact: true, path: "/login" },
    component: <Redirect to="/login" />,
  },
  {
    props: { exact: true, path: "/dashboard" },
    component: <Dashboard to="/dashboard" />,
  },
];

const errorRoute = [
  {
    // props: { exact: true, path: '/' },
    component: <Redirect to="/authentication/404" />,
  },
];

const routes = [...entryRoute];

export default routes;
