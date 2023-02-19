import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing'
import Read from './Read'
import Write from './Write'

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const {isLoading, error} = useAuth0();
  return (
    <div className=''>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton className = "Login" />
          <LogoutButton className = "Logout"/>
        </>
      )}
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/read" exact element={<Read />} />
                <Route path="/write" exact element={<Write />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
