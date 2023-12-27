import React from "react";
import "./layout.css"
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import Sidebar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

const Layout = ({ children }) => {
  return (
    <Grid celled style={ { margin: 0, boxSizing: "border-box", padding: "0" } }>
      <Grid.Row style={ { marginLeft: 0, marginRight: 0 } }>
        <Grid.Column width={ 16 } style={ { paddingLeft: 0, paddingRight: 0 } }>
          <Header />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="main-row" style={ { marginLeft: 0, marginRight: 0 } }>
        <Grid.Column width={ 2 } style={ { padding: 0 } }>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={ 14 } className="no-padding-column" style={ { padding: "0" } }>
          { children }
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;