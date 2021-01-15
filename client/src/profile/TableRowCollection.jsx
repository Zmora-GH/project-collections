import React, {useState} from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import {TrashFill, PenFill, PlusSquare} from 'react-bootstrap-icons';
import axios from 'axios';

export default function TableRowCollection(props) {
    const [hover, setHover] = useState(false)
    const editHandle = () =>{
        // TODO: edit
    }
    const deleteHandle = () =>{
        axios.post('/api/collection/delete', {coll_id: props.data._id})
    }

    return (
        <tr onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} >
            <td className="ctd align-middle p-0">
                <ButtonGroup className={` ${ hover ? '': 'invisible'}`}>
                  <Button size="sm" variant="outline-info" onClick={editHandle}>
                      <PenFill color="white" className=""/>
                  </Button>
                  <Button size="sm" variant="outline-success" as="a" href={ `/collection/create_item/${props.data._id}` }>
                      <PlusSquare color="white" />
                  </Button>
                  <Button size="sm" variant="outline-danger" onClick={deleteHandle}>
                      <TrashFill color="white" />
                  </Button>
                </ButtonGroup>
            </td>
            <td className="ctd">
                <img src={'/static' + props.data.image_url} height="60px"/>
            </td>
            <td className="ctd" as="a" href={`/collection/${props.data._id}`} >
                <a className="text-decoration-none text-light" href={`/collection/${props.data._id}`} >{props.data.name}</a>
            </td>
            <td className="ctd">{props.data.theme}</td>
            <td className="ctd">{props.data.items.length}</td>
            <td className="ctd">{new Date(props.data.created).toLocaleDateString()}</td>

        </tr>
    )
}
