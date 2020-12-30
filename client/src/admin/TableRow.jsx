import React from 'react';
//import {Link} from 'react-bootstrap';

export default function TableRow() {
    return (
        <tr>
            <td className="text-center">
                <input type="checkbox" className="js-table-row"/>
            </td>
            <td>DATA 1</td>
            <td>DATA 2</td>
            <td className="table-warning">DATA 3</td>
            <td className="table-success">DATA 4</td>
            <td>DATA 5</td>
            <td>DATA 6</td>
            <td> <a href=""> DATA 7 </a> </td>
        </tr>
    )
}
