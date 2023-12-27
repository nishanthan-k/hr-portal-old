import React from 'react'
import { Grid, Table } from 'semantic-ui-react'
import currentUser from "../../assets/data/currentUser.json"
import empData from "../../assets/data/employeesData.json"

const Account = () => {
  let userData = empData.employees.filter((user, index) => user.userName === currentUser[0].username );

  return (
    <div>
      <Grid style={ { width: "100vw" } }>

        <Grid.Column  style={{width: "90%", padding: "2rem" }}>
          <Table style={{width: "500px"}}>
            <Table.Body>
            { Object.entries(userData[0]).map((detail, value) => (
                (detail[0] !== "src" && (
                  <Table.Row key={value} >
                    <Table.HeaderCell>{ detail[0] } : </Table.HeaderCell>
                    <Table.Cell>{ detail[1] }</Table.Cell>
                  </Table.Row>
                )
                )
              )) }
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Account