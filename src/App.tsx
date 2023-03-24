import { useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { OrderWithDetails } from "./interface/Order";
import {HomePage} from "./view/HomePage";

function App() {
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);
  const [update, setUpdate] = useState(false);

  return (
    <MainContext.Provider value={{ orders, setOrders, update, setUpdate }}>
      <HomePage></HomePage>
    </MainContext.Provider>
  );
}

export default App;
