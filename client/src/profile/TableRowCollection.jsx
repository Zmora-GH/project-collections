import React, {useState} from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import {TrashFill, PenFill, PlusSquare} from 'react-bootstrap-icons';
import axios from 'axios';

export default function TableRowCollection(props) {
    const [hover, setHover] = useState(false)
    const [isDel, setIsDel] = useState(false)

    const deleteHandle = () =>{
        axios.post('/api/collection/delete', {coll_id: props.data._id})
        setIsDel(true)
    }

    if (isDel) {return ''} else {
    return (
        <tr onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} >
            <td className="ctd align-middle p-0">
                <ButtonGroup className={` ${ hover ? '': 'invisible'}`}>
                  <Button size="sm" variant="info" as="a" href={`/collection/edit/${props.data._id}`}>
                      <PenFill color="white" className=""/>
                  </Button>
                  <Button size="sm" variant="success" as="a" href={ `/collection/create_item/${props.data._id}` }>
                      <PlusSquare color="white" />
                  </Button>
                  <Button size="sm" variant="danger" onClick={deleteHandle}>
                      <TrashFill color="white" />
                  </Button>
                </ButtonGroup>
            </td>
            <td className="" as="a" href={`/collection/${props.data._id}`} >
                <a
                    className={`text-decoration-none text-${props.colormode.text}`}
                    href={`/table/${props.data._id}`}
                    > {props.data.name} </a>
            </td>
            <td className="text-truncate">
                <a
                    className={`text-decoration-none text-${props.colormode.text}`}
                    href={props.data.image_url}
                    > {props.data.image_url} </a>
            </td>
            <td className="ctd">{props.data.theme}</td>
            <td className="ctd">{props.data.items.length}</td>
            <td className="ctd">{new Date(props.data.created).toLocaleDateString()}</td>

        </tr>
    )
}}
