import React, { useState } from 'react'
import { Grid, GridColumn, Icon } from 'semantic-ui-react'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal'
import "./dashboard.css"

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  }
  console.log("open:", open)
  console.log("selectedEmp:", selectedEmp);

  return (
    <div className='dashboard-container'>
      <Grid celled padded style={ { width: "100vw" } }>
        <Grid.Column style={ { backgroundColor: "darkorchid", width: "15%" } }>
          <div className='sidebar'>
            <Icon name={ "building" } size='big' style={ { color: "white" } }></Icon>
          </div>
        </Grid.Column>

        <Grid.Column style={ { width: "85%" } }>
          
          <EmployeeCard selectedEmp={ selectedEmp } clickHandler={ clickHandler } />
          <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Dashboard

