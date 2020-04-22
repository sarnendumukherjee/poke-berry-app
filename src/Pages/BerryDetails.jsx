import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import {
  Grid,
  Box,
  CircularProgress,
  Paper,
  Divider,
  Chip,
  Typography,
} from "@material-ui/core";
import { getBerryDetails, getBerryItemDetails } from "../service";
import GoToHomeAvatar from "../Components/GoToHomeAvatar";
import SearchIcon from "@material-ui/icons/Search";

const BerryDetails = () => {
  const berryName = useParams();
  const [berry, setBerryDetails] = useState();

  useEffect(() => {
    getBerryDetails(berryName).then((data) => {
      const berryData = data;

      getBerryItemDetails(data.item.name).then((itemDetails) => {
        if (itemDetails.sprites && itemDetails.sprites.default) {
          berryData.image = itemDetails.sprites.default;
        }
        setBerryDetails(berryData);
      });
    });
  }, [berryName]);

  if (!berry) {
    return <CircularProgress color="secondary" className="circularProgress" />;
  }

  return (
    <Grid item xs={12}>
      <GoToHomeAvatar />

      <Paper variant="outlined">
        <Box p={3}>
          {berry.name && (
            <Box>
              <Typography variant="h4" gutterBottom>
                {berry.name.toUpperCase()}
              </Typography>
              {berry.image && (
                <Box mb={3}>
                  <img
                    height="50"
                    width="50"
                    title={berry.name}
                    alt={berry.name}
                    src={berry.image}
                  />
                  <Divider />
                </Box>
              )}
            </Box>
          )}

          <Box textAlign="left">
            <Typography variant="subtitle1">
              {berry.growth_time && (
                <Box>
                  Growth Time (Time it takes the tree to grow one stage, in
                  hours) : {berry.growth_time}
                </Box>
              )}
              {berry.max_harvest && (
                <Box>
                  Maximum number of these berries that can grow on one tree :{" "}
                  {berry.max_harvest}
                </Box>
              )}
              {berry.natural_gift_power && (
                <Box>Natural Gift Power : {berry.natural_gift_power}</Box>
              )}
              {berry.size && (
                <Box>Size of the Berry, in millimeters : {berry.size}</Box>
              )}
              {berry.firmness && (
                <Box>
                  Firmness of the berry :{" "}
                  <Chip
                    label={
                      <Box className="viewBerry">
                        {berry.firmness.name.toUpperCase()}
                        <Box ml={1}>
                          <SearchIcon fontSize="small" />
                        </Box>
                      </Box>
                    }
                    color="primary"
                    component="a"
                    href={`/berry-firmness/${berry.firmness.name}`}
                    clickable
                  />
                </Box>
              )}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default withRouter(BerryDetails);
