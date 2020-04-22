import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import {
  Grid,
  Box,
  CircularProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { getBerryFirmnessDetails } from "../service";
import GoToHomeAvatar from "../Components/GoToHomeAvatar";
import BerryList from "../Components/BerryList";

const BerryFirmness = () => {
  const firmnessType = useParams();
  const [berryList, setBerryList] = useState([]);

  useEffect(() => {
    getBerryFirmnessDetails(firmnessType).then((data) => {
      setBerryList(data.berries);
    });
  }, [firmnessType]);

  if (!berryList) {
    return <CircularProgress color="secondary" className="circularProgress" />;
  }

  return (
    <Grid item xs={12}>
      <GoToHomeAvatar />

      <Paper variant="outlined">
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            {firmnessType.name.toUpperCase()} Berries
          </Typography>

          <BerryList list={berryList} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default withRouter(BerryFirmness);
