import React, {useState, useEffect} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import {LockFill, UnlockFill, TrashFill, StarFill} from 'react-bootstrap-icons';
import axios from 'axios';

import TableRow from './TableRow';

export default function Admin() {
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get('/api/admin/users')
        .then((res)=>{setUserList(res.data)})
        .catch((err)=>{console.log(err)})
        setLoading(false)
    }, [])

    const checkAllHandle = (event) => {
        let temp = Array.from(document.getElementsByClassName('js-table-row'));
        for (let i = 0; i < temp.length; i++){
            temp[i].checked = event.target.checked;
        }
    }

    const getSelectedIds = () => {
        let checkBoxes = document.getElementsByClassName('js-table-row');
        let selectedIdsArray = []
        for (let i = 0; i < checkBoxes.length; i++){
            if (checkBoxes[i].checked) {
                selectedIdsArray.push(userList[i]._id)
            }
        }
        return selectedIdsArray;
    }

    const makePostRequest = async (adr) => {
        setLoading(true)
        let checkedList = getSelectedIds()
        await axios.post('/api/admin/' + adr, checkedList)
        .then((res)=>{
            setLoading(false);
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err);
        })
        setLoading(false)
    }
    return (
        <div className="bg-light">
            <Card border="dark" bg="light" className="admin-panel">
                <Card.Header as="h5">Admin Panel:</Card.Header>
                <Card.Header>
                    <Button size="sm"type="button" variant="info" className="mx-1" onClick={()=>{makePostRequest('block')}}>
                        Block
                        <LockFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1" onClick={()=>{makePostRequest('unblock')}}>
                        Unblock
                        <UnlockFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1" onClick={()=>{makePostRequest('assign')}}>
                        Assign admin
                        <StarFill color="white" className="mx-2"/>
                    </Button>
                    <Button size="sm"type="button" variant="info" className="mx-1" onClick={()=>{makePostRequest('delete')}}>
                        Delete
                        <TrashFill color="white" className="mx-2"/>
                    </Button>
                    { loading ?
                    <span class="spinner-border spinner-border-sm text-info" role="status" aria-hidden="true"></span>
                    : '' }

                </Card.Header>
                <Card.Body>
                    <Table size="sm" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th className="text-center"><input type="checkbox" onChange={checkAllHandle}/></th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>STAFF</th>
                                <th>STATUS</th>
                                <th>JOINED</th>
                                <th>PROFILE LINK</th>
                            </tr>
                        </thead>
                        <tbody>{userList.map((user, index) => <TableRow key={index} data={user}/>)}</tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
