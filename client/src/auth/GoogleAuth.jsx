import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';


export default function GoogleAuth(props) {
    const responseGoogle = (response) => {
        props.setLoadingState(true)
        console.log(response.profileObj);
        axios.post('/api/auth/google_signin', {googleProfileObj: response.profileObj})
        .then((res)=>{
            console.log(res);
            localStorage.setItem('userData' , JSON.stringify({...res.data}));
            window.location.replace('/')
        })
        .catch((err)=>{ console.log(err) })
        props.setLoadingState(false)
    }

    return (
        <GoogleLogin
            clientId="442745189059-183d5c6v8o5314bpa433fe3u9h6qpg7v.apps.googleusercontent.com"
            render={renderProps => (
                <button
                    className="btn-sm btn-light btn-block my-1"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    Google
                </button>
            )}
            onSuccess={responseGoogle}
            onFailure={(res) => { console.error(res) }}
            cookiePolicy={'single_host_origin'}
            redirectUri="http://localhost:3000"
          />
    )
}
