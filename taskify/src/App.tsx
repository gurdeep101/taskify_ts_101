import React from 'react';

import './App.css';

// this function returns a jsx.element
// creat span element with text Taskify and apply CSS class 'heading' to it
const App: React.FC = () => {
  return (
    <div className='App'>
        <span className="heading">Taskify</span>
    </div>
  )
}

export default App;
