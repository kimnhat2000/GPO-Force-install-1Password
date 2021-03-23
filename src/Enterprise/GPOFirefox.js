import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

const GPOFirefox = ({ name }) => (
  <Container onClick={console.log(name)}>
    <Table basic='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='firefox'/>Firefox</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell><p>Firefox</p></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)
export default GPOFirefox