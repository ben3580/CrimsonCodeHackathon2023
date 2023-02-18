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
            <Routes>
                <Route path="/" exact component={Landing} />
                <Route path="/read" exact component={Read} />
                <Route path="/write" exact component={Write} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
