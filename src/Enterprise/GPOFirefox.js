import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

import {Firefox} from '../browserInfo'

const style = {
  code: {
  backgroundColor: "#f1f1f1",
  padding: "0.25em",
  }

}


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
          <Table.Cell><p>Open Group Policy Management on your domain controler by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell><p>Go <a href='https://github.com/mozilla/policy-templates/releases'>here</a> to get the lastest policies for Firefox</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell><p>{`Unzip the file > copy`} <code style={style.code}>firefox.admx</code> and <code style={style.code}>firefox.adml</code> of your language to <code style={style.code}>C:\Windows\PolicyDefinitions</code> <code style={style.code}>C:\Windows\PolicyDefinitions\(your language)</code> </p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>4</Table.Cell>
          <Table.Cell><p>On Group Policy Management, create a new policy for Firefox under <code style={style.code}>Group Policy Objects</code></p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>5</Table.Cell>
          <Table.Cell><p>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>6</Table.Cell>
          <Table.Cell><p>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>7</Table.Cell>
          <Table.Cell><p>Right-click the Policy and select Edit to open Group Policy Management Editor</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>8</Table.Cell>
          <Table.Cell><p>Search and expand <code style={style.code}>Administrative Templates</code>{`> Firefox > Extensions > select`} <code sytle={style.code}>Extensions to Install</code> on the right menu {`> Right click > Edit`}</p></Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell>9</Table.Cell>
          <Table.Cell><p>Select Enable and Show buttons {`>`} add the link of 1Password's xpi file under value</p></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)
export default GPOFirefox