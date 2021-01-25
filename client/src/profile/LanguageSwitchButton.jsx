import React, {useState} from 'react';
import {FormCheck} from 'react-bootstrap';
import axios from 'axios';

export default function LanguageSwitchButton(props) {
    const [chk, setChk] = useState(localStorage.getItem('langData') === 'ru')

    const changeHandle = () => {
        props.i18n.changeLanguage( chk ? 'en' : 'ru')
        axios.post('/api/profile/lang', {userId: props.user, lang: chk ? 'en' : 'ru'})
        .then((res) => {
            localStorage.setItem('langData', chk ? 'en' : 'ru')
        })
        .catch((err) => { console.log(err) })
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
