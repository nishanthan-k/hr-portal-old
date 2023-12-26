import React, { useState } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import empData from "../../assets/data/employeesData.json"
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import EmployeeFilter from '../../components/EmployeeFilter/EmployeeFilter'
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal'
import "./dashboard.css"
import SideBar from '../../components/SideBar/SideBar'

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
      <Grid padded style={ { width: "100vw" } }>

        <Grid.Column style={ { width: "10%" } }>
          <SideBar />
        </Grid.Column>

        <Grid.Column className='filter-column' style={ { width: "90%" } }>
          <Grid.Row className='filter-row' >
            <EmployeeFilter filteredEmp={ filteredEmp } setFilteredEmp={ setFilteredEmp } />
          </Grid.Row>
          <EmployeeCard filteredEmp={ filteredEmp } selectedEmp={ selectedEmp } clickHandler={ clickHandler } />
          <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Dashboard

