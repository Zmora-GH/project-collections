import React from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import {TrashFill,PenFill} from 'react-bootstrap-icons';

export default function TableRowCollection(props) {
    // TODO: delete and edit button
    return (
        <tr>
            <td className="ctd">
                <ButtonGroup >
                  <Button size="sm" variant="info" >
                      <PenFill color="white" className="mx-2"/>
                  </Button>
                  <Button size="sm" variant="danger" >
                      <TrashFill color="white" />
                  </Button>
                </ButtonGroup>
            </td>
            <td className="ctd">
                <img src={'/static' + props.data.image_url} height="60px"/>
            </td>
            <td className="ctd">
                <a className="text-decoration-none" href={`/collection/${props.data._id}`} >{props.data.name}</a>
            </td>
            <td className="ctd">{props.data.theme}</td>
            <td className="ctd">{props.data.items.length}</td>
            <td className="ctd">{new Date(props.data.created).toLocaleDateString()}</td>

        </tr>
    )
}
