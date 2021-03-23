import React from 'react'
import {
    Container,
    Table,
    Icon
} from 'semantic-ui-react'

import { Edge, Chrome, Firefox } from '../browserInfo'

const BrowserP = () => (
    <Container>
        <Table fixed singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell><Icon name='chrome' size='large' />Chrome</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='microsoft edge' size='large' />Edge</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='firefox' size='large' />Firefox</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>ID:
                                <Icon onClick={() => { navigator.clipboard.writeText(Chrome.ID) }} name='copy outline' />
                        {Chrome.ID}</Table.Cell>

                    <Table.Cell>ID:
                                <Icon onClick={() => { navigator.clipboard.writeText(Edge.ID) }} name='copy outline' />
                        {Edge.ID}</Table.Cell>

                    <Table.Cell>ID:
                                <Icon onClick={() => { navigator.clipboard.writeText(Firefox.ID) }} name='copy outline' />
                        {Firefox.ID}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>URL:
                            <Icon onClick={() => { navigator.clipboard.writeText(Chrome.Link) }} name='copy outline' />
                        {Chrome.Link}</Table.Cell>
                    <Table.Cell>URL:
                            <Icon onClick={() => { navigator.clipboard.writeText(Edge.Link) }} name='copy outline' />
                        {Edge.Link}</Table.Cell>

                    <Table.Cell>URL:
                            <Icon onClick={() => { navigator.clipboard.writeText(Firefox.Link) }} name='copy outline' />
                        {Firefox.Link}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Container>
)


export default BrowserP