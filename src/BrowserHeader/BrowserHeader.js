import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

export const BrowserHeader = ({name, icon, status, clickCheck}) => (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' onClick={() => clickCheck()}><Icon name={icon} />{name}
                    <Icon name={status ? 'arrow down' : 'arrow up'} /></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    