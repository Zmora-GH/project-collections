import React, {useState} from 'react';
import {FormCheck} from 'react-bootstrap';
import axios from 'axios';

export default function LanguageSwitchButton(props) {
    const [chk, setChk] = useState(false)
    const changeHandle = () => {
        setChk(!chk)
    }
    return (
        <FormCheck
            checked={chk}
            name="langswitcher"
            type="switch"
            id="custom-switch2"
            label= { chk ? <span> Язык: 🇷🇺 </span> : <span> Language: 🇬🇧 </span>}
            onChange={changeHandle}
        />
    )
}
