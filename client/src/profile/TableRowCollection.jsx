import React from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import {TrashFill,PenFill} from 'react-bootstrap-icons';
export default function TableRowCollection() {
    return (
        <tr>
            <td className="text-center col-md-1">
                <ButtonGroup >
                  <Button size="sm" variant="info" >
                      <PenFill color="white" className="mx-2"/>
                  </Button>
                  <Button size="sm" variant="danger" >
                      <TrashFill color="white" />
                  </Button>
                </ButtonGroup>
            </td>
            <td>DATA 1</td>
            <td>DATA 2</td>
            <td>DATA 3</td>
            <td>DATA 4</td>
            <td>DATA 5</td>
            <td>DATA 6</td>
        </tr>
    )
}
