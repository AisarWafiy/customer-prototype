import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AppHeader } from "../../components/appHeader/AppHeader";
import { StandardDialog } from "../../components/dialog/StandardDialog";
import Footer from "../../components/footer/Footer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { CardContents } from "../../components/card/CardContents";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  //   paper: {
  //     borderRadius: 15,
  //     margin: "10px 10px",
  //     maxWidth: 816,
  //   },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#08197b",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "#f8fafb",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  desc: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#333333",
    paddingRight: "8px",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const rows = [
    {
      category: "A",
      desc: "Up to 3000mah Lorem ipsum",
      currPrice: 2190000000,
      deposit: 10000,
      totalPrice: 2190000000,
      priceWithTax: 3090000000,
    },
    {
      category: "B",
      desc: "Up to 3000mah",
      currPrice: 9000,
      deposit: 10000,
      totalPrice: 9000,
      priceWithTax: 11000,
    },
    {
      category: "C",
      desc: "Up to 3000mah",
      currPrice: 100000,
      deposit: 10000,
      totalPrice: 100000,
      priceWithTax: 120000,
    },
    {
      category: "D",
      desc: "Up to 3000mah",
      currPrice: 100000,
      deposit: 10000,
      totalPrice: 100000,
      priceWithTax: 11000,
    },
    {
      category: "E",
      desc: "Up to 3000mah",
      currPrice: 100000,
      deposit: 10000,
      totalPrice: 100000,
      priceWithTax: 11000,
    },
  ];

  const BasicTable = () => {
    const classes = useStyles();

    return (
      <Box className="table-container flex-grow-1">
        <Paper style={{ width: "100%" }}>
          <div className="p-3 d-flex justify-content-between">
            <div>
              <div className={classes.title}>Current Gadget Price</div>
              <div>Exercise Period: 01/08/2021 to 31/08/2021</div>
            </div>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleClickOpen}
            >
              Update Price
            </Button>
          </div>

          <TableContainer>
            <Table aria-label="simple table">
              <TableHead className={classes.tableHeaderCell}>
                <TableRow style={{ padding: "16px 24px" }}>
                  <TableCell>Gadget Category (USD)</TableCell>
                  <TableCell align="right">Current Gadget Price</TableCell>
                  <TableCell align="right">Deposit&nbsp;(USD)</TableCell>
                  <TableCell align="right">Total Price&nbsp;(USD)</TableCell>
                  <TableCell align="right">Price w Tax&nbsp;(USD)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.category}
                    style={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {/* <Grid container>
                        <Grid item lg={1}>
                          <Typography className={classes.desc}>
                            {row.category}
                          </Typography>
                        </Grid>
                        <Grid item lg={1}>
                          <Avatar
                            alt={row.category}
                            src="."
                            className={classes.avatar}
                          />
                        </Grid>
                        <Grid item lg={10}>
                          <Typography>{row.desc}</Typography>
                        </Grid>
                      </Grid> */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span className={classes.desc}>{row.category}</span>
                        <Avatar
                          alt={row.category}
                          src="."
                          className={classes.avatar}
                        />
                        <div style={{ padding: "0px 8px" }}> {row.desc}</div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{row.currPrice}</TableCell>
                    <TableCell align="right">{row.deposit}</TableCell>
                    <TableCell align="right">{row.totalPrice}</TableCell>
                    <TableCell align="right">{row.priceWithTax}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    );
  };

  return (
    <>
      {/* <StandardDialog
        fullWidth
        open={openDialog}
        onClose={handleClose}
        title={"Your Title Here"}
        dividers
        footerBtn={[
          {
            label: "Upload",
            onClick: handleClose,
            color: "primary",
            variant: "outlined",
          },
          {
            label: "Close",
            onClick: handleClose,
            color: "primary",
            variant: "contained",
          },
        ]}
      >
        Type your content here
      </StandardDialog> */}
      <div className="d-flex justify-content-between p-3">
        <BasicTable />
        <div>
          <CardContents
            style={{ minWidth: "400px" }}
            header={
              <div>
                <div className="d-flex justify-content-between">
                  <span>Exercise Status</span>
                  <span>
                    <span>Inprogress</span>
                  </span>
                </div>
                <span>Bidding ends on 29/08/2021 SGT 04:00</span>
              </div>
            }
          >
            <div className="d-flex  justify-content-center ">
              <div> Next exercise starts in </div>
            </div>
            <div className="d-flex  justify-content-center ">
              <div> - </div>
            </div>
          </CardContents>
          <CardContents
            style={{ padding: "10px", width: "400px" }}
            header={
              <div>
                <div className="d-flex justify-content-between">
                  <span>My Bids</span>
                </div>
                <span>Last Updated on 29/08/2021 SGT 04:00</span>
              </div>
            }
          >
            <div className="d-flex justify-content-around align-items-center">
              <div>
                {" "}
                <Avatar alt={"Image"} src="." />{" "}
              </div>
              <div>
                <div className="p-1">
                  Sorry, the COE Open Bidding Exercise is closed for now.
                </div>
                <div className="p-1">
                  Would you like to prepare bids or get your car washed?
                </div>
              </div>
            </div>
          </CardContents>
        </div>
      </div>
      {/* <Button color="primary" variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <div className="p-3">
        <div className="font-weight-bolder">
          † Notes for Current COE Price :
        </div>
        <div>
          1. Actual available amount for drawdown may differ due to unpaid
          interest and charges or other factors.
        </div>
        <div>2. The exchange rates for conversion are indicative only. </div>
        <div>
          3. Balances and details reflected are indicative as at last business
          day.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
