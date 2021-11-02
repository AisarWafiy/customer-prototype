import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import chev from "../../assets/icons/chevron-expand.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppHeader = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDropDown, setSelectedDropDown] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const [customerType, setCustomerType] = useState("motor trader");
  const [defaultView, setDefaultView] = useState("left");

  const handleDefaultView = (event, newView) => {
    setDefaultView(newView);
  };

  console.log("---showDropDown", showDropDown);
  const handleMouseOverUser = (event) => {
    // setShowDropDown(true)
    setAnchorUser(event.currentTarget);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleCloseMenu = () => {
    setShowDropDown(false);
  };

  const handleCloseUser = () => {
    setShowDropDown(false);
    setAnchorUser(null);
  };

  const handleMouseOver = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedDropDown(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedDropDown(null);
  };

  const navigation = [
    {
      label: "DASHBOARD",
      path: "/dashboard",
      id: 1,
      subNavigation: [
        {
          label: "MY BIDS",
          path: "/my-bids",
          id: 1.1,
        },
        {
          label: "SEARCH BIDS",
          path: "/my-bids",
          id: 1.2,
        },
      ],
    },

    {
      label: "MY BIDS",
      path: "/my-bids",
      id: 2,
      subNavigation: [
        {
          label: "MY BIDS",
          path: "/my-bids",
          id: 1.1,
        },
        {
          label: "SEARCH BIDS",
          path: "/my-bids",
          id: 1.2,
        },
      ],
    },
    {
      label: "SEARCH BIDS",
      path: "/my-bids",
      id: 3,
      subNavigation: [
        {
          label: "TEST",
          path: "/my-bids",
          id: 1.1,
        },
        {
          label: "SEARCH BIDS",
          path: "/my-bids",
          id: 1.2,
        },
      ],
    },
    {
      label: "EXERCISE REPORT",
      path: "/exercise-report",
      id: 4,
      subNavigation: [
        {
          label: "MY BIDS",
          path: "/my-bids",
          id: 1.1,
        },
        {
          label: "SEARCH BIDS",
          path: "/my-bids",
          id: 1.2,
        },
      ],
    },
  ];

  const userNavigation = [
    {
      label: "HELP",
      path: "/help",
      id: 0,
      icon: false,
    },

    {
      label: "CHANGE PIN",
      path: "/my-bids",
      id: 1,
      icon: false,
    },

    {
      label: "LOGOUT",
      path: "/logout",
      id: 2,
      icon: true,
    },
  ];

  // const DropdownList = (label, path) => (
  //   <ListItem
  //     style={{ padding: '26px 10px' }}
  //     // button
  //     activeclassname={'active'}
  //     component={NavLink}
  //     to={path}
  //     onClick={''}
  //   >
  //     <ListItemText primary={label} />
  //   </ListItem>
  // )

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="fixed">
        <div className="app-header">
          <Typography
            variant="h6"
            className={classes.title}
            style={{ marginLeft: "24px", justifyContent: "start" }}
          >
            AIA
          </Typography>
          <List
            disablePadding
            className={showDropDown ? "nav-link-li active" : "nav-link-li"}
            component="nav"
          >
            {navigation.map((v, index) => (
              <ListItem
                key={index}
                divider={matches ? true : false}
                activeclassname={"active"}
                component={NavLink}
                to={v.path}
                onClick={handleCloseMenu}
                onMouseOver={(e) => handleMouseOver(e, index)}
              >
                <div className="item-box">
                  <ListItemText className="item-text" primary={v.label} />
                  <div className="active-line" />
                </div>
              </ListItem>
              // {v.subNavigation ? (
              //         <Menu
              //           id='nav-menu'
              //           anchorEl={anchorEl}
              //           keepMounted
              //           open={selectedDropDown === index}
              //           // onClose={handleClose}
              //           // MenuListProps={{ onMouseLeave: handleClose }}
              //           getContentAnchorEl={null}
              //           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              //           transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              //         >
              //           {v.subNavigation.map((el, idx) => (
              //             <MenuItem
              //               key={idx}
              //               component={NavLink}
              //               activeclassname={'active'}
              //               to={el.path}
              //             >
              //               {el.label}
              //             </MenuItem>
              //           ))}
              //         </Menu>
              //       ) : null}
              //      {v.subNavigation ? (
              //         <>
              //           {v.subNavigation.map((el, idx) => (
              //             <ListItem
              //               key={el.id}
              //               style={{ padding: '26px 10px' }}
              //               activeclassname={'active'}
              //               component={NavLink}
              //               to={el.path}
              //               // onClick={''}
              //             >
              //               <ListItemText primary={el.label} />
              //             </ListItem>
              //           ))}
              //         </>
              //       ) : null}
            ))}
            <div className="user-mobile-content" onMouseLeave={handleCloseUser}>
              {customerType === "motor trader" && (
                <ListItem divider activeclassname={"active"}>
                  <div style={{ paddingBottom: "4px", textAlign: "left" }}>
                    <ListItemText primary={"MY BIDS DEFAULT VIEW"} />
                    <ToggleButtonGroup
                      value={defaultView}
                      exclusive
                      onChange={handleDefaultView}
                      aria-label="default-view"
                      className="view-toggle"
                    >
                      <ToggleButton
                        value="folder"
                        aria-label="folder-view"
                        className="mt-toggle"
                      >
                        Folder
                      </ToggleButton>
                      <ToggleButton
                        value="bid"
                        aria-label="bid-view"
                        className="mt-toggle"
                      >
                        Bid
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </ListItem>
              )}

              {userNavigation.map((el, idx) => (
                <div key={idx}>
                  <ListItem
                    // button
                    activeclassname={"active"}
                    component={NavLink}
                    to={el.path}
                    style={{ padding: "20px 16px", textAlign: "left" }}
                    onClick={handleCloseMenu}
                  >
                    {el.icon && (
                      <img
                        style={{ paddingRight: "8px" }}
                        sizes="lg"
                        src={chev}
                        alt="user-profile"
                      />
                    )}{" "}
                    <ListItemText primary={el.label} />
                  </ListItem>
                </div>
              ))}
            </div>
          </List>
          <List component="nav" className="user-menu" disablePadding>
            <ListItem
              activeclassname={"active"}
              button
              selected={showDropDown}
              onClick={handleClick}
            >
              {!matches && <img sizes="lg" src={chev} alt="user-profile" />}
              <div className="mobile-menu">
                {showDropDown ? (
                  <CloseIcon className="menu-icon" />
                ) : (
                  <MenuIcon className="menu-icon" />
                )}
              </div>
            </ListItem>

            <div className="user-content">
              <List
                disablePadding
                component="nav"
                onMouseLeave={handleCloseUser}
              >
                {customerType === "motor trader" && (
                  <ListItem divider>
                    <div>
                      <ListItemText primary={"MY BIDS DEFAULT VIEW"} />
                      <ToggleButtonGroup
                        value={defaultView}
                        exclusive
                        onChange={handleDefaultView}
                        aria-label="default-view"
                        className="view-toggle"
                      >
                        <ToggleButton
                          value="folder"
                          aria-label="folder-view"
                          className="mt-toggle"
                        >
                          Folder
                        </ToggleButton>
                        <ToggleButton
                          value="bid"
                          aria-label="bid-view"
                          className="mt-toggle"
                        >
                          Bid
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </ListItem>
                )}
                {userNavigation.map((el, idx) => (
                  <ListItem
                    key={idx}
                    button
                    activeclassname={"active"}
                    component={NavLink}
                    to={el.path}
                  >
                    {el.icon && (
                      <img
                        style={{ paddingRight: "8px" }}
                        sizes="lg"
                        src={chev}
                        alt="user-profile"
                      />
                    )}{" "}
                    <ListItemText primary={el.label} />
                  </ListItem>
                ))}
              </List>
            </div>
          </List>
          {/* </div> */}
        </div>
      </AppBar>
    </div>
  );
};
