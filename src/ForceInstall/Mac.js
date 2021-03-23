import React from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'

const style = {
    code: {
        backgroundColor: "#f1f1f1",
        padding: "0.25em",
    }

}

const Mac = ({ name }) => (
    <Container onClick={console.log(name)}>
        <Container>Mac can force install 1Password using Plist files of a browser. However, JSON is preferable since it works cross platforms </Container>

        <Table basic='very'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='chrome' />ForceInstall 1Password in Chrome</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell><p>Create a JSON file with the name is the name of 1Password ID in Chrome</p></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>
                        <p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>~USERNAME/Library/Application Support/Google/Chrome/External Extensions/</code></p>
                        <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/Library/Application Support/Google/Chrome/External Extensions/</code></p></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>
                        <p>Add this line of code to your JSON file:</p>
                        <code style={style.code}>{`{
    "external_update_url": "https://clients2.google.com/service/update2/crx"
  }`}</code>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell><p>Open Chrome and go to <code style={style.code}>chrome://extensions</code> to see 1Password there.</p></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

        <Table basic='very'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='microsoft edge' />ForceInstall 1Password in Microsoft Edge</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell><p>Create a JSON file with the name is the name of 1Password ID in Edge</p></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>
                        <p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>~USERNAME/Library/Application Support/Microsoft Edge/External Extensions/</code></p>
                        <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/Library/Application Support/Microsoft/Edge/External Extensions/</code></p></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>
                        <p>Add this line of code to your JSON file:</p>
                        <code style={style.code}>{`{
    "external_update_url": "https://clients2.google.com/service/update2/crx"
  }`}</code>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell><p>Open Edge and go to <code style={style.code}>edge://extensions</code> to see 1Password there.</p></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

        <Table basic='very'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign='center'><Icon name='firefox' />Force Install 1Password in Firefox</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell><p>Open {`the /Applications folder > Search > Right-click Firefox > Show Package Contents > Contents > Resources > Create a`} <code style={style.code}>distribution</code> folder and Add <code style={style.code}>policies.json</code> file in it.<code style={style.code}>C:\Program Files\Mozilla Firefox</code></p></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
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
        </Table>

    </Container>
)
export default Mac