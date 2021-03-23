import React from 'react'
import {
  Container,
} from 'semantic-ui-react'

import Prerequisite from './Prerequisite/Prerequisite'
import PlatformMenu from './PlatformMenu'

const App = () => (
  <Container>
    <Prerequisite/>
    <PlatformMenu/>
  </Container>
)

export default App