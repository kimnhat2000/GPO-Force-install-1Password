import React from 'react'
import { Container, Table } from 'semantic-ui-react'

import {BrowserHeader} from '../BrowserHeader/BrowserHeader'
import { enterprise } from '../Data/data'

class GPO extends React.Component {
    constructor() {
        super()
        this.state = {
            chrome: false,
            edge: true,
            firefox: false
        }
    }

    render() {
        const { chrome, edge, firefox } = this.state
        this.onClickEdge = (v) => {
            this.setState({ edge: !edge })
        }

        this.onClickChrome = () => {
            this.setState({ chrome: !chrome })
        }

        this.onClickFirefox = () => {
            this.setState({ firefox: !firefox }, () => console.log(chrome))
        }
        return (
            <Container>
                <Table basic='very'>
                    <BrowserHeader
                        name={'Microsoft Edge'}
                        icon={'microsoft edge'}
                        status={edge}
                        clickCheck={this.onClickEdge}
                    />
                    {edge &&
                        <Table.Body>
                            {enterprise.Edge.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{item.s}</Table.Cell>
                                    <Table.Cell>{item.p}</Table.Cell>
                                </Table.Row>))
                            }
                        </Table.Body>
                    }
                </Table>

                <Table basic='very'>
                    <BrowserHeader
                        name={'Chrome'}
                        icon={'chrome'}
                        status={chrome}
                        clickCheck={this.onClickChrome}
                    />
                    {chrome &&
                        <Table.Body>
                            {enterprise.Chrome.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{item.s}</Table.Cell>
                                    <Table.Cell>{item.p}</Table.Cell>
                                </Table.Row>))
                            }
                        </Table.Body>
                    }
                </Table>

                <Table basic='very'>
                    <BrowserHeader
                        name={'Firefox'}
                        icon={'firefox'}
                        status={firefox}
                        clickCheck={this.onClickFirefox}
                    />
                    {firefox &&
                        <Table.Body>
                            {enterprise.Firefox.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{item.s}</Table.Cell>
                                    <Table.Cell>{item.p}</Table.Cell>
                                </Table.Row>))
                            }
                        </Table.Body>
                    }
                </Table>
            </Container>
        )
    }
}

export default GPO