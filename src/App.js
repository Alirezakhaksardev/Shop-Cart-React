import React from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import Productdetails from "./components/ProductDetails";
// Component 🤡
  //shared
  import Navbar from "./components/shared/Navbar";

import Store from "./components/Store";

// Context`s 🌎
import ProductContextProvider from "./context/ProductContextProvider";
import Cartcontextprovider from "./context/CartContextProvider";
import Shopcart from "./components/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <Cartcontextprovider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<Shopcart />} />
          <Route path="/" element={<Navigate to="/products" />} />

          {/* 404 rounte */}
          <Route path="*" element="404" />
        </Routes>
      </Cartcontextprovider>
    </ProductContextProvider>
  );
}

export default App;
