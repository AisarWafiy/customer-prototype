import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { AppHeader } from "../../components/appHeader/AppHeader";
import { StandardDialog } from "../../components/dialog/StandardDialog";
import Footer from "../../components/footer/Footer";

const Login = () => {

const [openDialog, setOpenDialog] = useState(false)

const handleClickOpen = () => {
  setOpenDialog(true)
}

const handleClose = () => {
  setOpenDialog(false)
}

  return (
    <>
<StandardDialog 
fullWidth
open={openDialog}
onClose={handleClose}
title={"Your Title Here"}
dividers
footerBtn={[
  { label: "Upload", onClick: handleClose, color: "primary", variant: 'outlined'},
  {
    label: "Close",
    onClick: handleClose,
    color: "primary",
    variant: 'contained'
    },
]}
>
 Type your content here 
   </StandardDialog>
      <div
      >
        LOGIN
      </div>
<Button color="primary" variant="outlined" onClick={handleClickOpen}>Open Dialog</Button>

<Footer />
    </>
  );
};

export default Login;
