import React, {useState} from 'react';
import {FormCheck} from 'react-bootstrap';
import axios from 'axios';

export default function ColorModeSwitchButton(props) {
    const [chk, setChk] = useState(props.colormode.name === 'dark')
    const changeHandle = () => {
        setChk(!chk)
        props.togleColormode()
        axios.post('/api/profile/colormode', {userId: props.user, colormode: props.colormode.name})
        .catch((err)=>{ console.log(err) })
    }

    return (
        <FormCheck
            checked={chk}
            name="colormodeswitcher"
            type="switch"
            id="custom-switch"
            label={`Colormode: ${chk ? 'Dark' : 'Light'}`}
            onChange={changeHandle}
        />
    )
}
