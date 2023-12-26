import React from 'react'
import { useLocation } from 'react-router-dom'
import { Grid, Header, Table } from 'semantic-ui-react';
import SideBar from '../SideBar/SideBar';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import empData from "../../assets/data/employeesData.json"

const ProjectDetails = (props) => {
  const location = useLocation();
  const project = location.state.project || "";
  // console.log(project)

  const fetchDevelopers = (teamMembers) => {
    let arr = empData.employees.filter((emp, index) => teamMembers.includes(emp.empID))
    console.log("arr:", arr);

    return arr;
  }


  return (
    <div>
      <Grid style={ { width: "100vw" } }>
        <Grid.Column style={ { width: "12%" } }>
          <SideBar />
        </Grid.Column>
        <Grid.Column style={ { width: "88%", padding: "2rem" } }>
          <Table >
            <Table.Body>
              {/* <Header>{ props.selectedEmp.fullName }</Header>
              { Object.entries(props.selectedEmp).map((data, value) => (
                (data[0] !== "fullName" && data[0] !== "password" && (
                  <p key={data[0]}><span>{ data[0] } : </span>{ data[1] }</p>
                ))
              )) } */}

              { Object.entries(project).map((detail, value) => (
                (detail[0] !== "teamMembers" && (
                  <Table.Row>
                    <Table.HeaderCell>{ detail[0] } : </Table.HeaderCell>
                    <Table.Cell>{ detail[1] } : </Table.Cell>
                  </Table.Row>
                )
                )
              )) }

              <Table.Row>
                <Table.HeaderCell>Team Members : </Table.HeaderCell>
                <Table.Cell> <EmployeeCard filteredEmp={ fetchDevelopers(project.teamMembers) } /> </Table.Cell>
              </Table.Row>


            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ProjectDetails