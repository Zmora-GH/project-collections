import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';


export default function GoogleAuth() {
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
            clientId="442745189059-183d5c6v8o5314bpa433fe3u9h6qpg7v.apps.googleusercontent.com"
            render={renderProps => (
                <button
                    className="btn btn-light"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    Google
                </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
    )
}
