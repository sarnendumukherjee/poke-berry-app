import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { getPagedBerries } from "../service";
import { Box, CircularProgress, Grid, TextField } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import BerryList from "../Components/BerryList";

const Berries = () => {
  const pageSize = 10;

  const [berries, setBerries] = useState([]);
  const [search, setSearch] = useState();
  const [filteredBerries, setFilteredBerries] = useState([]);
  const [paginationConfig, setPaginationConfig] = useState();

  const handlePageChange = (event, index) => {
    fetchBerries(index - 1);
  };

  const searchBerry = useCallback(() => {
    if (!search) {
      setFilteredBerries(berries);
      return false;
    }
    const filteredBerriesData = berries.data.filter(function (item) {
      return item.name.includes(search);
    });
    setFilteredBerries({ ...berries, data: filteredBerriesData });
  }, [berries, search]);

  useEffect(() => {
    fetchBerries(0);
  }, []);

  useEffect(() => {
    searchBerry();
  }, [berries, search, searchBerry]);

  const fetchBerries = (currentPageNo) => {
    getPagedBerries({
      offset: pageSize * currentPageNo,
      limit: pageSize,
    }).then((data) => {
      setPaginationConfig({
        count: Math.ceil(data.totalCount / pageSize),
        page: currentPageNo,
      });
      setBerries(data);
      setFilteredBerries(data);
    });
  };

  if (!berries || !berries.data) {
    return <CircularProgress color="secondary" className="circularProgress" />;
  }
  return (
    <Box>
      <Box textAlign="right">
        <TextField
          variant="outlined"
          label="Search a Berry"
          type="Search a Berry"
          size="small"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Box>

      {filteredBerries && filteredBerries.data && (
        <Box mb={5}>
          <BerryList list={filteredBerries.data} />
        </Box>
      )}

      {paginationConfig && berries.data.length > 0 && (
        <Grid item xs={12}>
          <Box className="paginationContainer">
            <Pagination
              count={paginationConfig.count}
              page={paginationConfig.page + 1}
              onChange={handlePageChange}
              shape="rounded"
              color="primary"
            />
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default withRouter(Berries);
