import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

import GPO from './ForceInstall/GPO'
import Windows from './ForceInstall/Windows'
import Mac from './ForceInstall/Mac'
import Linux from './ForceInstall/Linux'

// import Test from './test/Test'

export default class PlatformMenu extends Component {
  state = { activeItem: 'Windows Enterprise' }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    var rendercontains = '';

    if (activeItem === 'Windows Enterprise') {
      rendercontains = <GPO/>
    } else if (activeItem === 'Windows') {
      rendercontains = <Windows/>
    } else if (activeItem === 'Mac') {
      rendercontains = <Mac/>
    }else {
      rendercontains = <Linux/>
    }

    return (
      <div>
        <Menu pointing fluid widths={4}>
          <Menu.Item
            name='Windows Enterprise'
            active={activeItem === 'Windows Enterprise'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Windows'
            active={activeItem === 'Windows'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Mac'
            active={activeItem === 'Mac'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Linux'
            active={activeItem === 'Linux'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Container>
          {rendercontains}
        </Container>
      </div>
    )
  }
}

