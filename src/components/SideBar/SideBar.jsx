import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu, Sidebar } from 'semantic-ui-react'

const SideBar = () => {
  return (
    <Container style={ { width: "100vw", height: "100vh" } }>
      <Sidebar
        as={ Menu }
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
      >
        <Menu.Item as={ Link } name="dashboard" to="/dashboard">
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
        
        <Menu.Item as={ Link } name="projects" to="/projects">
          <Icon name='laptop' />
          Projects
        </Menu.Item>
        
        <Menu.Item as={ Link } name="account" to="/account">
          <Icon name='user circle' />
          Account
        </Menu.Item>
      </Sidebar>
    </Container>
  )
}

export default SideBar