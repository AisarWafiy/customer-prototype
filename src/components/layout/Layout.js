import { makeStyles, useTheme } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import React from "react";
import { useRouteMatch } from "react-router";
import { AppHeader } from "../../components/appHeader/AppHeader";

const Layout = ({ children }) => {
  let routeMatch = useRouteMatch({
    path: ["/test", "/authentication/404"],
    strict: true,
    sensitive: true,
  });

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        // display: "flex",
      },

      mainContent: {
        position: "relative",
        top: `${!routeMatch ? "72px" : "0px"}`,
        flexGrow: 1,
        //   transition: theme.transitions.create("margin", {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        //   }),
        //   [theme.breakpoints.up("xs")]: {
        //     top: `${!routeMatch ? "64px" : "0px"}`,
        //     padding: theme.spacing(0),
        //   },
      },
    })
  );
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      {!routeMatch ? <AppHeader /> : null}
      <main className={classes.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
