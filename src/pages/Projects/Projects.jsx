import React, { useState } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import empData from "../../assets/data/employeesData.json";
import projectData from "../../assets/data/projectDetails.json";
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import SideBar from '../../components/SideBar/SideBar';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showDevelopers, setShowDevelopers] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");

  const fetchDevelopers = (teamMembers) => {
    let arr = empData.employees.filter((emp, index) => teamMembers.includes(emp.empID))
    console.log("arr:", arr);

    return arr;
  }

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  }

  const fetchDetails = (project) => {
    console.log("fetch details")
    navigate("/projects/details", {state: {project: project}})
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
              <Item key={ index }  onClick={() => fetchDetails(project) }  >
                <Item.Image size='small' src={ (project.src) } onClick={() => fetchDetails(project) } />
                <Item.Content style={ { padding: "20px" } }>
                  <Item.Header onClick={() => fetchDetails(project) }>{ project.title }</Item.Header>
                  <Item.Meta>
                    { project.projectTeam }
                  </Item.Meta>
                  <Item.Description>
                    { project.description }
                  </Item.Description>
                  <Item.Extra>
                    Tech Stack : { project.techStack }
                  </Item.Extra>
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