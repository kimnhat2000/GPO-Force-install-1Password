import { Table, Icon } from 'semantic-ui-react'

export const BrowserHeader = ({icon, name, status, clickCheck}) => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell colSpan='4' onClick={()=>clickCheck()}><Icon name={icon} />{name}<Icon name={status?'arrow down':'arrow up'}/></Table.HeaderCell>
        </Table.Row>
    </Table.Header>
)