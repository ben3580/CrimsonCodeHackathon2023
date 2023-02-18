import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Auth0Provider
        domain= "dev-2z0ys20vkpn2djq1.us.auth0.com"
        clientId= "J7kGu9UbOVGVKzNROKPuvqCl036xKW1o"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App name="App"/>
    </Auth0Provider>
);