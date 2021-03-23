import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

import { Chrome, Edge } from '../browserInfo'

class Windows extends React.Component {
  constructor() {
    super()
    this.state = {
      chrome: false,
      edge: false,
      firefox: false
    }
  }
  render() {
    const { chrome, edge, firefox } = this.state
    const style = {
      code: {
        backgroundColor: "#f1f1f1",
        padding: "0.25em",
      }
    }
    this.onClickEdge = () => {
      this.setState({ edge: !edge })
    }

    this.onClickChrome = () => {
      this.setState({ chrome: !chrome }, () => console.log(chrome))
    }

    this.onClickFirefox = () => {
      this.setState({ firefox: !firefox })
    }
    return (
      <Container>
        <Container>For companies that don't use Windows Enterprise and have no access to Group Policy Management, it is still possible to force install 1Password</Container>

        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' onClick={() => this.onClickChrome()}><Icon name='chrome' />ForceInstall 1Password in Chrome <Icon name={chrome ? 'arrow down' : 'arrow up'} /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {chrome &&
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell><p>Open registry editor by selecting <Icon name='windows' /> + R {`> Type in "Registy Editor" > Enter`}</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell><p>Copy and paste this link to the address bar: <strong> Win 32:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Google\Chrome\Extensions</code> and this link for <strong>Win 64:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Wow6432Node\Google\Chrome\Extensions</code> If you don't see the Extensions foler, please create one. </p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell><p>Create a new folder in the Extensions and use 1Password's ID <code style={style.code}>{Chrome.ID}</code> to name it</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell><p>4.Create new string value with the name <code style={style.code}>update_url</code> and value data is the download link from Chrome</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell><p>Relaunch Chrome to see 1Password there</p></Table.Cell>
              </Table.Row>
            </Table.Body>
          }
        </Table>
        {/* Edge */}
        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' onClick={() => this.onClickEdge()}><Icon name='microsoft edge' />ForceInstall 1Password in Microsoft Edge<Icon name={edge ? 'arrow down' : 'arrow up'} /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {edge &&
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell><p>Open registry editor by selecting <Icon name='windows' /> + R {`> Type in "Registy Editor" > Enter`}</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell><p>Copy and paste this link to the address bar: <strong> Win 32:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions</code> and this link for <strong>Win 64:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions</code> If you don't see the Extensions foler, please create one. </p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell><p>Create a new folder in the Extensions and use 1Password's ID <code style={style.code}>{Edge.ID}</code> to name it</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell><p>4.Create new string value with the name <code style={style.code}>update_url</code> and value data is the download link from Edge</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell><p>Relaunch Edge to see 1Password there</p></Table.Cell>
              </Table.Row>
            </Table.Body>
          }
        </Table>
        {/* firefox */}
        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' onClick={() => this.onClickFirefox()}><Icon name='firefox' />Force Install 1Password in Firefox <Icon name={firefox ? 'arrow down' : 'arrow up'} /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {firefox &&
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell><p>Go to Firefox.exe location. The default path is <code style={style.code}>C:\Program Files\Mozilla Firefox</code></p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell><p>Create a <code style={style.code}>distribution</code> folder, a <code style={style.code}>policies.json</code> file in it.</p></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell><p>Add extension policies in the JSON file</p>
                  <code>{`{
  "policies": {
    "ExtensionSettings": {
      "*": {
        "blocked_install_message": "Custom error message.",
        "install_sources": ["about:addons","https://addons.mozilla.org/"],
        "installation_mode": "allowed",`} <code style={style.code}>use "blocked" if don’t want any extension besides the one allowed in policies</code>
                    {`"allowed_types": ["extension"]
      },
    }
  }`}
                  </code>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell><p>Add 1Password extension ID and link to xpi file in the Policies.</p>
                  <code>{` "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
        "installation_mode": "force_installed",
        "install_url": "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
      }`}</code>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell><p>It should look like this</p>
                  <code>{`{
  "policies": {
    "ExtensionSettings": {
      "*": {
        "blocked_install_message": "Custom error message.",
        "install_sources": ["about:addons","https://addons.mozilla.org/"],
        "installation_mode": "allowed",
        "allowed_types": ["extension"]
      },
      "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
        "installation_mode": "force_installed",
        "install_url": "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
      }
    }
  }`}
                  </code>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          }
        </Table>
      </Container>

    )
  }
}
export default Windows