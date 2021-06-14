import React from 'react';
import { Textfield } from './components/common/Textfield';
import Header from './components/common/Header'
import Customer from './components/Customer';

import './App.css';

const App: React.FC = () => {
  return <div>
    <Header />
    <Customer />
    <Textfield text='hello' />
  </div>;
}

export default App;
