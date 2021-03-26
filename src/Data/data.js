import { Icon } from 'semantic-ui-react'
import JSONPretty from 'react-json-pretty'
import {Container} from 'semantic-ui-react'

import { Chrome, Edge } from '../browserInfo'

const style = {
    code: {
        backgroundColor: "#f1f1f1",
        padding: "0.25em",
    }
}

export const enterprise = {
    Edge: [
        {
            s: 1,
            p: <span>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</span>
        },
        {
            s: 2,
            p: <span>Get the latest policies file for your Edge version from <a href="https://www.microsoft.com/en-us/edge/business/download">here</a></span>
        },
        {
            s: 3,
            p: <span>Create a new GPO for 1Password or add to an existing one.</span>
        },
        {
            s: 4,
            p: <span>Right-click on the new GPO and Select <code style={style.code}>Edit</code> to open the Group Policy Editor.</span>
        },
        {
            s: 5,
            p: <span>Expand <code style={style.code}>Computer configuration</code> to force install 1password on admin computer. Expand  <code style={style.code}>Computer/User configuration</code> to force install 1password on users' computer.</span>
        },
        {
            s: 6,
            p: <span>Search and Right-click <code style={style.code}>Administrative templates</code> Select <code style={style.code}>Add/Remove Templates</code></span>
        },
        {
            s: 7,
            p: 'Add and upload the policies template downloaded above'
        },
        {
            s: 8,
            p: <span>Search for <code style={style.code}>Microsoft Edge</code> in the <code style={style.code}>Administrative templates</code> and expand the folder</span>
        },
        {
            s: 9,
            p: <span>Select Extensions folder {`>`} Select <code style={style.code}>Control which extensions are installed silently</code> {`> Edit > Show > Enter 1Password ID under the value and the download link to Microsoft web store separated by a semi-colon without space in between > Ok > Apply.`}</span>
        },
    ],
    Chrome: [
        {
            s: 1,
            p: <span>Open Group Policy Management by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</span>
        },
        {
            s: 2,
            p: <span>Get the latest policies file for your Chrome from  <a href="https://chromeenterprise.google/browser/download/#download">here</a>{`> Select`} <code style={style.code}>Manage policies</code> {`tab > Download the latest Chrome policies template.`} {`>`} Unzip and select the <code style={style.code}>chrome.adm</code> of your language</span>
        },
        {
            s: 3,
            p: 'Create a new GPO for 1Password or add to an existing one.'
        },
        {
            s: 4,
            p: <span>Right-click on the new GPO and Select <code style={style.code}>Edit</code> to open the Group Policy Editor.</span>
        },
        {
            s: 5,
            p: <span>Expand <code style={style.code}>Computer configuration</code> to force install 1password on admin computer. Expand  <code style={style.code}>Computer/User configuration</code> to force install 1password on users' computer.</span>
        },
        {
            s: 6,
            p: <span>Search and Right-click <code style={style.code}>Administrative templates</code> Select <code style={style.code}>Add/Remove Templates</code></span>
        },
        {
            s: 7,
            p: 'Add and upload the policies template you select above'
        },
        {
            s: 8,
            p: <span>To add extension to users. Expand {`Computer/User configuration folder`}  {`> Policies > Administrative templates > Classic administrative templates > Google > Google Chrome > Extensions`}</span>
        },
        {
            s: 9,
            p: <span>Select Extensions folder {`>`} Select <code style={style.code}>Configure the list of force-installed extensions</code> {`> Edit > Show > Enter 1Password ID under the value and the download link to Chrome separated by a semi-colon without space in between`}</span>
        },
        {
            s: 10,
            p: <span>It shoudl look like this: <code style={style.code}>{Chrome.ID};{Chrome.Link}</code>{`> Ok > Apply.`}</span>
        }
    ],
    Firefox: [
        {
            s: 1,
            p: <span>Open Group Policy Management on your domain controler by pressing<Icon name='windows' /><code style={style.code}>key+R</code> combination. Type in <code style={style.code}>gpmc.msc</code> and select OK.</span>
        },
        {
            s: 2,
            p: <span>Go <a href='https://github.com/mozilla/policy-templates/releases'>here</a> to get the lastest policies for Firefox</span>
        },
        {
            s: 3,
            p: <span>{`Unzip the file > copy`} <code style={style.code}>firefox.admx</code>to <code style={style.code}>C:\Windows\PolicyDefinitions</code> and <code style={style.code}>firefox.adml</code> of your language to <code style={style.code}>C:\Windows\PolicyDefinitions\(your language)</code></span>
        },
        {
            s: 4,
            p: <span>On Group Policy Management, create a new policy for Firefox under <code style={style.code}>Group Policy Objects</code></span>
        },
        {
            s: 5,
            p: 'Right-click the Policy and select Edit to open Group Policy Management Editor'
        },
        {
            s: 6,
            p: <span>Search and expand <code style={style.code}>Administrative Templates</code>{`> Firefox > Extensions > select`} <code sytle={style.code}>Extensions to Install</code> on the right menu {`> Right click > Edit`}</span>
        },
        {
            s: 7,
            p: <span>Select Enable and Show buttons {`>`} add the link of 1Password's xpi file under value</span>
        }
    ]
}

export const windows = {
    Chrome: [
        {
            s: 1,
            p: <span>Open registry editor by selecting <Icon name='windows' /> + R {`> Type in "Registy Editor" > Enter`}</span>
        },
        {
            s: 2,
            p: <span>Copy and paste this link to the address bar: <strong> Win 32:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Google\Chrome\Extensions</code> and this link for <strong>Win 64:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Wow6432Node\Google\Chrome\Extensions</code> If you don't see the Extensions foler, please create one.</span>
        },
        {
            s: 3,
            p: <span>Create a new folder in the Extensions and use 1Password's ID <code style={style.code}>{Chrome.ID}</code> to name it</span>
        },
        {
            s: 4,
            p: <span>Create new string value with the name <code style={style.code}>update_url</code> and value data is the download link from Chrome</span>
        },
        {
            s: 5,
            p: 'Relaunch Chrome to see 1Password there'
        }
    ],
    Edge: [
        {
            s: 1,
            p: <span>Open registry editor by selecting <Icon name='windows' /> + R {`> Type in "Registy Editor" > Enter`}</span>
        },
        {
            s: 2,
            p: <span>Copy and paste this link to the address bar: <strong> Win 32:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions</code> and this link for <strong>Win 64:</strong> <code style={style.code}>HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions</code> If you don't see the Extensions foler, please create one.</span>
        },
        {
            s: 3,
            p: <span>Create a new folder in the Extensions and use 1Password's ID <code style={style.code}>{Edge.ID}</code> to name it</span>
        },
        {
            s: 4,
            p: <span>Create new string value with the name <code style={style.code}>update_url</code> and value data is the download link from Edge</span>
        },
        {
            s: 5,
            p: 'Relaunch Edge to see 1Password there'
        }
    ],
    Firefox: [
        {
            s: 1,
            p: <span>Go to Firefox.exe location. The default path is <code style={style.code}>C:\Program Files\Mozilla Firefox</code></span>
        },
        {
            s: 2,
            p: <span>Create a <code style={style.code}>distribution</code> folder, a <code style={style.code}>policies.json</code> file in it.</span>
        },
        {
            s: 3,
            p: <span><p>Add extension policies in the JSON file</p>
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
                </code></span>
        },
        {
            s: 4,
            p: <span><p>Add 1Password extension ID and link to xpi file in the Policies.</p>
                <code>{` "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
  "installation_mode": "force_installed",
  "install_url": "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
}`}</code></span>
        },
        {
            s: 5,
            p: <span><p>It should look like this</p>
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
}
}`}
                </code></span>
        },
    ]
}

export const mac = {
    Chrome: [
        {
            s: 1,
            p: 'Create a JSON file with the name is the name of 1Password ID in Chrome'
        },
        {
            s: 2,
            p: <span> <p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>~USERNAME/Library/Application Support/Google/Chrome/External Extensions/</code></p>
                <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/Library/Application Support/Google/Chrome/External Extensions/</code></p></span>
        },
        {
            s: 3,
            p: <span><p>Add this line of code to your JSON file:</p>
                <code style={style.code}>{`{
"external_update_url": "https://clients2.google.com/service/update2/crx"
}`}</code></span>
        }
    ],
    Edge: [
        {
            s: 1,
            p: 'Create a JSON file with the name is the name of 1Password ID in Edge'
        },
        {
            s: 2,
            p: <span><p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>~USERNAME/Library/Application Support/Microsoft Edge/External Extensions/</code></p>
                <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/Library/Application Support/Microsoft/Edge/External Extensions/</code></p></span>
        },
        {
            s: 3,
            p: <span><p>Add this line of code to your JSON file:</p>
                <code style={style.code}>{`{
"external_update_url": "`}{Edge.Link}"
{`}`}</code></span>
        },
        {
            s: 4,
            p: <span>Open Edge and go to <code style={style.code}>edge://extensions</code> to see 1Password there.</span>
        },
    ],
    Firefox: [
        {
            s: 1,
            p: <span>Open {`the /Applications folder > Search > Right-click Firefox > Show Package Contents > Contents > Resources > Create a`} <code style={style.code}>distribution</code> folder and Add <code style={style.code}>policies.json</code> file in it.</span>
        },
        {
            s: 2,
            p: <span><p>Add extension policies in the JSON file</p>
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
                </code></span>
        },
        {
            s: 3,
            p: <span><p>Add 1Password extension ID and link to xpi file in the Policies.</p>
                <code>{` "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
"installation_mode": "force_installed",
"install_url": "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
}`}</code></span>
        },
        {
            s: 4,
            p: <span><p>It should look like this</p>
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
}}`}
                </code></span>
        }
    ]
}

export const linux = {
    Chrome: [
        {
            s: 1,
            p: 'Create a JSON file with the name is the name of 1Password ID in Chrome'
        },
        {
            s: 2,
            p: <span><p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>/opt/google/chrome/extensions/</code></p>
                <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/usr/share/google-chrome/extensions/</code></p></span>
        },
        {
            s: 3,
            p: <span><p>Add this line of code to your JSON file:</p>
                <code style={style.code}>{`{
"external_update_url": "https://clients2.google.com/service/update2/crx"
}`}</code></span>
        },
        {
            s: 4,
            p: <span>Open Chrome and go to <code style={style.code}>chrome://extensions</code> to see 1Password there.</span>
        }
    ],
    Edge: [
        {
            s: 1,
            p: 'Create a JSON file with the name is the name of 1Password ID in Edge'
        },
        {
            s: 2,
            p: <span>  <p>To install 1Password on specific systems, copy the JSON file to this location: <code style={style.code}>~/.config/microsoft-edge/External Extensions/</code></p>
                <p>To install 1Password for all users, copy the file to this location:<code style={style.code}>/usr/share/microsoft-edge/extensions/</code></p></span>
        },
        {
            s: 3,
            p: <span><p>Add this line of code to your JSON file:</p>
                <code style={style.code}>{`{
"external_update_url": `}"{Edge.Link}"{`}`}</code></span>
        },
        {
            s: 4,
            p: <span>Open Edge and go to <code style={style.code}>edge://extensions</code> to see 1Password there.</span>
        }
    ],
    Firefox: [
        {
            s: 1,
            p: <span>Open {`the /Applications folder > Search > Right-click Firefox > Show Package Contents > Contents > Resources > Create a`} <code style={style.code}>distribution</code> folder and Add <code style={style.code}>policies.json</code> file in it.</span>
        },
        {
            s: 2,
            p: <span><p>Add extension policies in the JSON file</p>
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
                </code></span>
        },
        {
            s: 3,
            p: <span><p>Add 1Password extension ID and link to xpi file in the Policies.</p>
                <code>{` "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
"installation_mode": "force_installed",
"install_url": "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
}`}</code></span>
        },
        {
            s: 4,
            p: <Container><p>It should look like this</p>
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
}
}`}
                </code>
                </Container>
        }
    ]
}
