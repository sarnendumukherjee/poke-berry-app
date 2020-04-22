import React from "react";
import { Typography, Box } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

export default () => (
  <footer data-testid="footer">
    <Box>
      <Typography variant="caption">
        Developed and maintained by{" "}
        <a
          className="githubLink"
          href="https://github.com/sarnendumukherjee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sarnendu Mukherjee
        </a>
        <Box component="span" m={1}>
          <GitHubIcon fontSize="small" />
        </Box>
      </Typography>
    </Box>
  </footer>
);
