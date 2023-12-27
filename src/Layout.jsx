import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import Sidebar from "./components/SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <Grid style={{ margin: 0 }}>
      <Grid.Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Grid.Column width={2} style={{ padding: 0 }}>
          {/* Content for the first column (12vw width) */}
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={10} style={{ padding: 0 }}>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
