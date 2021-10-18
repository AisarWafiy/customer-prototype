import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";


export const StandardDialog = (props) => {
  const { title, children, footerBtn, onHide } = props;

  return (
    <>
      <Dialog
        {...props}
        aria-labelledby="standard-Dialog"
        centered
      >
        
          <DialogTitle id="standard-Dialog" className="dialog-title">{title}</DialogTitle>
        
        <DialogContent {...props}>{children}</DialogContent>
        <DialogActions>
          {footerBtn?.map((el, index) => (
            <Button
              key={index}
              onClick={el.onClick}
              disabled={el.disabled}
              variant={el.variant}
              color={el.color}
              {...el.props}
              style={{ minWidth: "8rem" }}
            >
              {el.label}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </>
  );
};
