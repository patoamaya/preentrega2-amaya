import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import CounterContainer from "./components/Counter/CounterContainer";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
      {/* <CounterContainer /> */}
      {/* <FetchingData /> */}
    </div>
  );
}

export default App;
