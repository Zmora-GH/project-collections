import React from 'react';
import {Table, Button, Card, Row, Col} from 'react-bootstrap';

import TableRowCollection from './TableRowCollection';

export default function Profile() {
    return (
        <div>
            <Card>
                <Card.Header as="h5">Profile:</Card.Header>
                <Card.Body>
                    <Row><Col><Row>
                        <Col><span>VasiaPupkin228:</span></Col>
                    </Row><Row>
                        <Col><span>asjdhakjsd@sda.asd:</span></Col>
                    </Row></Col><Col><Row>
                        <Col><span>LAST:</span></Col>
                        <Col><span>10 10 10  20 20:</span></Col>
                    </Row><Row>
                        <Col><span>REG DATE:</span></Col>
                        <Col><span>10 20 20  20 20 </span></Col>
                    </Row></Col><Col><Row>
                        <Col><span>DATA ?:</span></Col>
                        <Col><span>##############</span></Col>
                    </Row><Row>
                        <Col><span>DATA ?</span></Col>
                        <Col><span>##############</span></Col>
                    </Row></Col></Row>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Collections:</Card.Header>
                <Card.Body>
                    <Table size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                                <th>DATA #</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                            <TableRowCollection />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
