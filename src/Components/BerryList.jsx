import React from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const BerryList = (props) => {
  const { history } = props;

  const gotoDetails = (el) => {
    history.push(`/berry/${el.name}`);
  };

  if (props.list.length === 0) {
    return <Box>No such Berry found.</Box>;
  }

  return (
    <List dense={true}>
      {props.list &&
        props.list.map(
          (item, index) =>
            item && (
              <ListItem
                button
                divider={true}
                key={index}
                onClick={() => gotoDetails(item)}
              >
                <ListItemText
                  id={`listItem${index}`}
                  primary={
                    <Box textAlign="center">
                      <Typography variant="h6" gutterBottom>
                        {item.name.toUpperCase()}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            )
        )}
    </List>
  );
};

export default withRouter(BerryList);
