import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import empData from "../../assets/data/employeesData.json"

const EmployeeCard = (props) => {
  return (
    <div>
      { empData.employees.map((emp, index) => (
        <Card key={ index } className='card' onClick={ () => { props.clickHandler(emp) } } >
          <Image src={ require("../../assets/images/profile-icon.jpg") } ui={ false } style={ { width: "100px", height: "100px" } } />
          <Card.Content className='card-content'>
            <Card.Header>{ emp.fullName }</Card.Header>
            <Card.Meta>Joined in { emp.doj }</Card.Meta>
            <Card.Description>{ emp.role }</Card.Description>
          </Card.Content>
        </Card>
      )) }
    </div>
  )
}

export default EmployeeCard