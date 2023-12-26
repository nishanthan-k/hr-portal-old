import React, { useState } from 'react'
import { Grid, Item } from 'semantic-ui-react'
import SideBar from '../../components/SideBar/SideBar'
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal';
import projectData from "../../assets/data/projectDetails.json"

const Projects = () => {

  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
    <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
  }

  return (
    <div>
      <Grid style={ { width: "100vw" } }>
        <Grid.Column style={ { width: "12%" } }>
          <SideBar />
        </Grid.Column>
        <Grid.Column style={ { width: "88%", padding: "20px" } }>
          <Item.Group divided >

            { projectData.map((project, index) => (
              <Item key={ index }>
                <Item.Image size='small' src={ (project.src) } />
                <Item.Content style={ { padding: "20px" } }>
                  <Item.Header>{ project.title }</Item.Header>
                  <Item.Meta>
                    { project.projectTeam }
                  </Item.Meta>
                  <Item.Description>
                    { project.description }
                    <Item.Extra>
                      { project.techStack }
                    </Item.Extra>
                  </Item.Description>
                </Item.Content>
              </Item>
            )) }

          </Item.Group>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Projects