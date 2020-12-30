import React from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import {LockFill, UnlockFill, TrashFill, StarFill} from 'react-bootstrap-icons';

import TableRow from './TableRow';

export default function Admin() {
    return (
        <div className="bg-light">
            <Card border="dark" bg="light" className="admin-panel">
                <Card.Header as="h5">Admin Panel:</Card.Header>
                <Card.Header>
                    <Button size="sm"type="button" variant="info" className="mx-1">
                        Block
                        <LockFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1">
                        Unblock
                        <UnlockFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1">
                        Assign admin
                        <StarFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1">
                        Delete
                        <TrashFill color="white" className="mx-2"/>
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Table size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th className="text-center">
                                    <input type="checkbox" onChange={()=>{}}/>
                                </th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>IS ADMIN</th>
                                <th>STATUS</th>
                                <th>LAST IN</th>
                                <th>DATE UP</th>
                                <th>PROFILE LINK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow />
                            <TableRow />
                            <TableRow />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
