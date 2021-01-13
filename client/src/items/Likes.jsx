import React, {useState, useContext} from 'react';
import {Button, Badge, Popover, OverlayTrigger} from 'react-bootstrap';
import {HandThumbsUp} from 'react-bootstrap-icons';
import axios from 'axios';

import {AuthContext} from '../core/context';

export default function Likes(props) {
    const {isAuth, userId} = useContext(AuthContext);
    const [likes, setLikes] = useState(props.startCount);
    const [show, setShow] = useState(false);

    const likeHandle = () => {
        if (isAuth) {
            axios.post('/api/items/like', {user_id: userId, item_id: props.itemId})
            .then((res)=>{setLikes(res.data.likes)})
            .catch((err)=>{ console.log(err) })
        } else {
            setShow(true);
        }
    }

    const popover = (
      <Popover id="popover-basic"><Popover.Content>
          <strong>You must be logged in!</strong>
      </Popover.Content> </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover} show={show}>
            <Button variant="outline-light" className="text-center px-1" onClick={likeHandle}>
                <HandThumbsUp size={24}/> <Badge variant="light"> {likes} </Badge>
            </Button>
        </OverlayTrigger>
    )
}
