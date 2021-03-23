import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

import { Chrome } from '../browserInfo'

const style = {
  code: {
    backgroundColor: "#f1f1f1",
    padding: "0.25em",
  }

}

const GPOEdge = ({ name }) => (
  <Container onClick={console.log(name)}>
    <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='microsoft edge' />Microsoft Edge</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell><p>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</p></Table.Cell>
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
          <Table.Cell>Right-click on the new GPO and Select <code style={style.code}>Edit</code> to open the Group Policy Editor.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>Expand <code style={style.code}>Computer configuration</code> to force install 1password on admin computer. Expand  <code style={style.code}>Computer/User configuration</code> to force install 1password on users' computer.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>Search and Right-click <code style={style.code}>Administrative templates</code> Select <code style={style.code}>Add/Remove Templates</code></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>7</Table.Cell>
          <Table.Cell>Add and upload the policies template downloaded above</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>Search for <code style={style.code}>Microsoft Edge</code> in the <code style={style.code}>Administrative templates</code> and expand the folder</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>9</Table.Cell>
          <Table.Cell>Select Extensions folder {`>`} Select <code style={style.code}>Control which extensions are installed silently</code> {`> Edit > Show > Enter 1Password ID under the value and the download link to Microsoft web store separated by a semi-colon without space in between > Ok > Apply.`}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='chrome' />Chrome</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell><p>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</p></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Get the latest policies file for your Chrome from  <a href="https://chromeenterprise.google/browser/download/#download">here</a>{`> Select`} <code style={style.code}>Manage policies</code> {`tab > Download the latest Chrome policies template.`} {`>`} Unzip and select the <code style={style.code}>chrome.adm</code> of your language</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Create a new GPO for 1Password or add to an existing one.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>Right-click on the new GPO and Select <code style={style.code}>Edit</code> to open the Group Policy Editor.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>Expand <code style={style.code}>Computer configuration</code> to force install 1password on admin computer. Expand  <code style={style.code}>Computer/User configuration</code> to force install 1password on users' computer.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>Search and Right-click <code style={style.code}>Administrative templates</code> Select <code style={style.code}>Add/Remove Templates</code></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>7</Table.Cell>
          <Table.Cell>Add and upload the policies template you select above</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>8</Table.Cell>
          <Table.Cell> To add extension to users. Expand {`Computer/User configuration folder`}  {`> Policies > Administrative templates > Classic administrative templates > Google > Google Chrome > Extensions`}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>9</Table.Cell>
          <Table.Cell>Select Extensions folder {`>`} Select <code style={style.code}>Configure the list of force-installed extensions</code> {`> Edit > Show > Enter 1Password ID under the value and the download link to Chrome separated by a semi-colon without space in between > Ok > Apply.`}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>It shoudl look like this: <code style={style.code}>{Chrome.ID};{Chrome.Link}</code></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='firefox' />Firefox</Table.HeaderCell>
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
export default GPOEdge