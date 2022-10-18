import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./component/Details";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
