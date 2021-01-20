import React, {useState} from 'react';
import {FormCheck} from 'react-bootstrap';
import {AuthContext} from '../core/context';
import axios from 'axios';

export default function ColorModeSwitchButton(props) {
    const [chk, setChk] = useState(true)

    const changeHandle = () => {
        setChk(!chk)
        props.togleColormode()
        //axios
        localStorage.setItem('colorData', JSON.stringify(props.colormode))
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
