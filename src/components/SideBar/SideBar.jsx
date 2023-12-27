import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu } from 'semantic-ui-react'
import "./sidebar.css"

const SideBar = () => {
  return (
    <Container>
      <div className='sidebar'>
        <Menu.Item className='menu' as={ Link } name="dashboard" to="/dashboard">
          <Icon size='big' name='chart bar outline' />
          Dashboard
        </Menu.Item>

        <Menu.Item className='menu' as={ Link } name="projects" to="/projects">
          <Icon size='big' name='laptop' />
          Projects
        </Menu.Item>

        <Menu.Item className='menu' as={ Link } name="leave" to="/leave">
          <Icon size='big' name='calendar check' />
          Leave
        </Menu.Item>

        <Menu.Item className='menu' as={ Link } name="account" to="/account">
          <Icon size='big' name='user circle' />
          Account
        </Menu.Item>
      </div>
    </Container>
  )
}

export default SideBar