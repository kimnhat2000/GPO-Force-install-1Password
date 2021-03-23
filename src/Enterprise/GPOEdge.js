import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

const GPOEdge = ({ name }) => (
  <Container onClick={console.log(name)}>
    <Table basic='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='microsoft edge'/>Microsoft Edge</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell><p>Open Group Policy Management by pressing<code><mark><Icon name='windows' />key+R</mark></code> combination. Type in <code><mark>gpmc.msc</mark></code> and select OK.</p></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Get the latest policies file for your Edge version from <a href="https://www.microsoft.com/en-us/edge/business/download">here</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Create a new GPO for 1Password or add to an existing one.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>Right-click on the new GPO and Select <code><mark>Edit</mark></code> to open the Group Policy Editor.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>Expand <code><mark>Computer configuration</mark></code> to force install 1password on admin computer. Expand  <code><mark>Computer/User configuration</mark></code> to force install 1password on users' computer.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>Search and Right-click <code><mark>Administrative templates</mark></code> Select <code><mark>Add/Remove Templates</mark></code></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>7</Table.Cell>
          <Table.Cell>Add and upload the policies template downloaded above</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>Search for <code><mark>Microsoft Edge</mark></code> in the <code><mark>Administrative templates</mark></code> and expand the folder</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>9</Table.Cell>
          <Table.Cell>Select Extensions folder {`>`} Select <code><mark>Control which extensions are installed silently</mark></code> {`> Edit > Show > Enter 1Password ID under the value and the download link to Microsoft web store separated by a semi-colon without space in between > Ok > Apply.`}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)
export default GPOEdge