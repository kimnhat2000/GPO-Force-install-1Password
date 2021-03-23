import React from 'react'
import {
  Header,
  Container,
  Grid,
  Icon
} from 'semantic-ui-react'


const style = {
  style1: {
    marginTop: '3em'
  },
  style2: {
    marginTop: '1.5em',
    marginBottom: '1.5em'
  }
}

const Prerequisite = () => (
  <div>
    <Container>
      <Header size='large' style={style.style1} textAlign='center'>Force install 1Password</Header>
      <Header size='medium' style={style.style1}>Prerequisite: Extension ID and URL</Header>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Icon name='chrome' size='large' />    
          </Grid.Column>
          <Grid.Column>
            <Icon name='microsoft edge' size='large' />
          </Grid.Column>
          <Grid.Column>
            <Icon name='firefox' size='large' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p>ID: aeblfdkhhhdcdjpifhhbdiojplfjncoa</p>
            <p>Update_url: <a href="https://clients2.google.com/service/update2/crx">Link</a> </p>
          </Grid.Column>
          <Grid.Column>
            <p>ID: dppgmdbiimibapkepcbdbmkaabgiofem</p>
            <p>Update_url: <a href="https://edge.microsoft.com/extensionwebstorebase/v1/crx">Link</a></p>
          </Grid.Column>
          <Grid.Column>
            <p>ID: d634138d-c276-4fc8-924b-40a0ea21d284</p>
            <p>Install_url:<a href="https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1">Link</a></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <Container>
      <Header size='medium' style={style.style2} textAlign='center'>Steps to force install 1Password on different systems</Header>
    </Container>

  </div>
)

export default Prerequisite

