import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stats from "../../components/DashBoard/Stats";
import Card from "../../components/DashBoard/Card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Card type="venus" value="43,23" time="Last 1 hour" id={1} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Card type="venus" value="43,23" time="Last 1 day" id={2}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Card type="venus" value="100.00" time="Last 1 week" id={3}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Card type="venus" value="150.45" time="Last month" id={4}/>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={12} lg={8}>
          <Paper className={classes.paper}>
            <Stats />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
