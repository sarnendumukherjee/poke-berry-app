import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Box, Avatar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const useStyles = makeStyles((theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  })
);

const GoToHomeAvatar = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Box mb={3}>
        <Avatar
          className={classes.orange}
          onClick={() => {
            history.push("/");
          }}
        >
          <HomeRoundedIcon />
        </Avatar>
      </Box>
    </Grid>
  );
};

export default withRouter(GoToHomeAvatar);
