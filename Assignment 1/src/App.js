import ItemList from "./Components/itemList";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i
          className="fa fa-shopping-basket fa-6"
          style={{ color: "white" }}
          aria-hidden="true"
        ></i>
        <h1 className="App-title" style={{ color: "white" }}>
          Hello, Basket!
        </h1>
      </header>

      <nav>
        <form>
          <input
            type="text"
            name="filterIt"
            defaultValue="filter for e.g. Apple onChange (not implemented)"
          />
        </form>
      </nav>

      <main>
        <ItemList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
