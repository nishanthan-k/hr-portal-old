import React from 'react'
import { Grid, Table } from 'semantic-ui-react'
import SideBar from '../../components/SideBar/SideBar'

const Account = () => {
  return (
    <div>
      <Grid style={ { width: "100vw" } }>
        <Grid.Column style={{width: "10%"}}>
          <SideBar />
        </Grid.Column>
        <Grid.Column  style={{width: "90%", padding: "2rem" }}>
          <Table style={{width: "250px"}}>
            <Table.Body>
              <Table.Row style={{height: "max-content"}}>
                <Table.HeaderCell>Name: </Table.HeaderCell>
                <Table.Cell>Romin</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Role: </Table.HeaderCell>
                <Table.Cell>Human Resource</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Account