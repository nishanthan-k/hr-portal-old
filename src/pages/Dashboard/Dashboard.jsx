import React, { useState } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import empData from "../../assets/data/employeesData.json"
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import EmployeeFilter from '../../components/EmployeeFilter/EmployeeFilter'
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal'
import "./dashboard.css"

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");
  const [filteredEmp, setFilteredEmp] = useState(empData.employees);

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  }
  // console.log("open:", open)
  // console.log("selectedEmp:", selectedEmp);

  // console.log("filteredEmp:", filteredEmp)

  return (
    <div className='dashboard-container'>
      <Grid celled padded style={ { width: "100vw" } }>

        <Grid.Column style={ { backgroundColor: "darkorchid", width: "15%" } }>
          <div className='sidebar'>
            <Icon name={ "building" } size='big' style={ { color: "white" } }></Icon>
          </div>
        </Grid.Column>

        <Grid.Column className='filter-column' style={ { width: "85%" } }>
          <Grid.Row className='filter-row' >
              <EmployeeFilter filteredEmp={filteredEmp} setFilteredEmp={setFilteredEmp} />
          </Grid.Row>
          <EmployeeCard filteredEmp={filteredEmp} selectedEmp={ selectedEmp } clickHandler={ clickHandler } />
          <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Dashboard

