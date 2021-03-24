import React from 'react'
import { Container, Table, Header } from 'semantic-ui-react'

import { BrowserHeader } from '../BrowserHeader/BrowserHeader'
import { Windows } from '../Data/data'

class Test extends React.Component {
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
        const { Edge, Chrome, Firefox } = Windows
        this.onClickEdge = (v) => {
            this.setState({ edge: !edge }, () => console.log('clicked'))
        }

        this.onClickChrome = () => {
            this.setState({ chrome: !chrome })
        }

        this.onClickFirefox = () => {
            this.setState({ firefox: !firefox }, () => console.log(chrome))
        }
        return (
            <Container>
                <Header size='small'>For companies that don't have Windows Enterprise and can't get access to Group Policy Manager can still force install 1Password</Header>
                <Table basic='very'>
                    <BrowserHeader
                        name={'Microsoft Edge'}
                        icon={'microsoft edge'}
                        status={edge}
                        clickCheck={this.onClickEdge}
                    />
                    {edge &&
                        <Table.Body>
                            {Edge.map((item, index) => (
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
                            {Chrome.map((item, index) => (
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
                            {Firefox.map((item, index) => (
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

export default Test