import React, {Suspense} from 'react';
import './App.css';

import Yellowfruit from './Components/yellowfruit'

function App() {
  return (    
  <Suspense fallback="loading">
      <Yellowfruit />
</Suspense>

  );  
}

export default App;
