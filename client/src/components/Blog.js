import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Context from "../context";
import CreatePin from "../components/Pin/CreatePin";
import NoContent from "../components/Pin/NoContent";
import PinContent from "../components/Pin/PinContent";

const Blog = ({ classes }) => {
  const { state } = useContext(Context);
  const { draft } = state;

  let BlogContent;
  if (!draft) {
    // no content
    BlogContent = NoContent;
  } else if (draft) {
    //create pin
    BlogContent = CreatePin;
  }

  return (
    <Paper className={classes.root}>
      <BlogContent />
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: "calc(100vh - 64px)",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
  },
  rootMobile: {
    maxWidth: "100%",
    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "scroll",
  },
};

export default withStyles(styles)(Blog);
