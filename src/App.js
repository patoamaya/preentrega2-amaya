import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ErrorView from "./components/ErrorView/ErrorView";
import Form from "./components/Form/Form";
import CartContainer from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<ErrorView />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<Form />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
