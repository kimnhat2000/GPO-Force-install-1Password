import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

import GPOEdge from './Enterprise/GPOEdge'
import ForceInstallWindowsChrome from './Windows/ForceInstallWindowsChrome'
import ForceInstallMac from './Mac/ForceInstallMac'

export default class PlatformMenu extends Component {
  state = { activeItem: 'Windows Enterprise' }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name },
      console.log(name))

  render() {
    const { activeItem } = this.state
    var rendercontains = '';

    if (activeItem === 'Windows Enterprise') {
      rendercontains = <GPOEdge/>
    } else if (activeItem === 'Windows') {
      rendercontains = <ForceInstallWindowsChrome/>
    } else if (activeItem === 'Mac') {
      rendercontains = <ForceInstallMac/>
    }else {
      rendercontains = <p>Nothing to show</p>
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

