import React from 'react';

export default function TableRow(props) {
    return (
        <tr>
            <td className="text-center">
                <input type="checkbox" className="js-table-row"/>
            </td>
            <td>{props.data.username}</td>
            <td>{props.data.email}</td>
            {props.data.staff ? <td className="table-warning">Admin</td>:<td className="table-info">User</td>}
            {props.data.status ? <td className="table-danger">Banned</td>:<td className="table-success">Not banned</td>}
            <td>{new Date(props.data.created).toLocaleDateString()}</td>
            <td><a href={"/profile/" + props.data.username}> {props.data.username} profile ... </a></td>
        </tr>
    )
}
