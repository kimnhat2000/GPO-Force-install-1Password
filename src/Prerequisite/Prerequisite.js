import React from 'react'
import {
  Header,
  Container,
} from 'semantic-ui-react'

import BrowserP from './BrowsersPrerequisite'

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
    <Container>
      <Header size='large' style={style.style1} textAlign='center'>Force install 1Password</Header>
      <Header size='medium' style={style.style1}>Prerequisite: Extensions' IDs and URLs</Header>
      <BrowserP />
      <Header size='medium' style={style.style2} textAlign='center'>Steps to force install 1Password on different systems</Header>
    </Container>
)

export default Prerequisite

