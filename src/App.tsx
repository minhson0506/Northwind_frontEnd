import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { OrderWithDetails } from "./interface/Order";
import { DetailsPage } from "./view/DetailsPage";
import { HomePage } from "./view/HomePage";

function App() {
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);

  return (
    <MainContext.Provider value={{ orders, setOrders }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:id" element={<DetailsPage />}>
            {/* <Route path=":id" element={<DetailsPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
