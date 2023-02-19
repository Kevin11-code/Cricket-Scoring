import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import GetMatches from "./components/GetMatches";
import PlayerSearch from "./components/PlayerSearch";

function App() {
  return (
    <div className="App">
      {/* <GetMatches /> */}
      {/* <News /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GetMatches />} />
          <Route path="/sportsnews" element={<News />} />
          <Route path="/playersearch" element={<PlayerSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
