import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MembersInfo from "./Components/MembersInfo";
import { GlobalProvider } from "./State/GlobalState"; 
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<MembersInfo />}/>
          </Routes>
        </Router>
      </GlobalProvider>  
    </div>
  );
}

export default App;
