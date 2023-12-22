import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
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
      <div className='sidebar'>
        <Icon name={ "building" } size='big'></Icon>
      </div>
      <div className='main'>
        <EmployeeCard selectedEmp={ selectedEmp } clickHandler={ clickHandler } />
        <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
      </div>
    </div>
  )
}

export default Dashboard