import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing'
import Read from './Read'
import Write from './Write'

const App = () => {
  return (
    <div className=''>
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
