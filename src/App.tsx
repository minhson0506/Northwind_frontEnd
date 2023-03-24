import {useEffect, useState} from 'react';
import './App.css';
import {MainContext} from './contexts/MainContext';
import {OrderWithDetails} from './interface/Order';

import {Home} from './view/Home';
// import {MainProvider} from './contexts/MainContext';

function App() {
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);
  const [update, setUpdate] = useState(false);
  

  return (
    <MainContext.Provider value={{orders, setOrders, update, setUpdate}}>
      <Home />
    </MainContext.Provider>
  );
}

export default App;
