import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';

export default function YandexAuth() {
    const CID = 'e26f7a74823a421990a54f202ad770a1'
    const yandexAuthUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${CID}` //&display=popup

    const clickHandle = ()=>{

    }

    return (
        <Button
            variant="light"
            className="mx-1"
            onClick={ clickHandle }
            > Yandex
        </Button>
    )
}
