import { RoutesComponent } from "./RoutesComponent";
import { Navbar } from "./Components";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
